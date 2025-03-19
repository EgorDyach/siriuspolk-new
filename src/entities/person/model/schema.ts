import { z } from 'zod';
import {
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MIN_YEAR,
  CURRENT_YEAR,
} from './constants';

const validateBirthYear = (birth_year: number | null, ctx: z.RefinementCtx) => {
  if (!birth_year) {
    return ctx.addIssue({
      path: ['birth_year'],
      message: 'Год рождения обязательный (или укажите "Неизвестно").',
      code: 'custom',
    });
  }
  if (birth_year <= MIN_YEAR) {
    return ctx.addIssue({
      path: ['birth_year'],
      message: 'Число должно быть больше 1840!',
      code: 'custom',
    });
  }
  if (birth_year > CURRENT_YEAR) {
    return ctx.addIssue({
      path: ['birth_year'],
      message: `Число должно быть меньше ${CURRENT_YEAR}!`,
      code: 'custom',
    });
  }
};

const validateDeathYear = (
  death_year: number | null,
  birth_year: number | null,
  ctx: z.RefinementCtx,
) => {
  if (!death_year) {
    return ctx.addIssue({
      path: ['death_year'],
      message: 'Год смерти обязательный (или укажите "Неизвестно" или "Жив").',
      code: 'custom',
    });
  }
  if (death_year <= MIN_YEAR) {
    return ctx.addIssue({
      path: ['death_year'],
      message: 'Число должно быть больше 1840!',
      code: 'custom',
    });
  }
  if (death_year > CURRENT_YEAR) {
    return ctx.addIssue({
      path: ['death_year'],
      message: `Число должно быть меньше ${CURRENT_YEAR}!`,
      code: 'custom',
    });
  }
  if (birth_year && birth_year > death_year) {
    return ctx.addIssue({
      path: ['death_year'],
      message: `Год смерти должен быть меньше года рождения!`,
      code: 'custom',
    });
  }
};

export const MainFormSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Имя должно быть больше 2 символов.',
    }),
    surname: z.string().min(2, {
      message: 'Фамилия должно быть больше 2 символов.',
    }),
    lastname: z.string().nullable(),
    photo: z.custom<FileList>().nullable(),
    hasnt_photo: z.boolean(),
    birth_year: z.coerce.number().nullable(),
    is_birth_unknown: z.boolean(),
    death_year: z.coerce.number().nullable(),
    is_death_unknown: z.boolean(),
    is_alive: z.boolean(),
    city: z.string().min(2, {
      message: 'Город обязательный.',
    }),
    rank: z.string().min(2, {
      message: 'Звание обязательное.',
    }),
  })
  .superRefine(({ is_birth_unknown, birth_year }, ctx) => {
    if (!is_birth_unknown) {
      validateBirthYear(birth_year, ctx);
    }
  })
  .superRefine(
    ({ is_death_unknown, death_year, is_alive, birth_year }, ctx) => {
      if (is_death_unknown && is_alive) {
        return ctx.addIssue({
          path: ['death_year'],
          message: 'Необходимо выбрать только "Неизвестно" или "Жив".',
          code: 'custom',
        });
      }
      if (!is_death_unknown && !is_alive)
        validateDeathYear(death_year, birth_year, ctx);
    },
  )
  .superRefine(({ hasnt_photo, photo }, ctx) => {
    if (hasnt_photo) return true;

    if (!photo) {
      return ctx.addIssue({
        path: ['photo'],
        message: 'Необходимо загрузить файл или выбрать "Фото отсутствует".',
        code: 'custom',
      });
    }

    if (photo.length !== 1) {
      return ctx.addIssue({
        path: ['photo'],
        message: 'Необходимо загрузить только один файл.',
        code: 'custom',
      });
    }

    if (photo.item(0)!.size > MAX_FILE_SIZE * 1024 * 1024) {
      return ctx.addIssue({
        path: ['photo'],
        message: `Максимальный размер фото – ${MAX_FILE_SIZE} МБ.`,
        code: 'custom',
      });
    }

    if (!ACCEPTED_IMAGE_TYPES.includes(photo.item(0)!.type)) {
      return ctx.addIssue({
        path: ['photo'],
        message: `Неподдерживаемый тип файла. Поддерживаемые: ${ACCEPTED_IMAGE_TYPES.map((el) => `.${el}`).join(', ')}`,
        code: 'custom',
      });
    }
  });

export type MainFormValues = z.infer<typeof MainFormSchema>;

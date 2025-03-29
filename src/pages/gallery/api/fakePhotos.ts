import { ApiResponse } from '@shared/api/types';
import { Photo } from '@shared/model/types';

export const fakeRequestPhotos = async (
  isError = false,
): Promise<ApiResponse<Photo>> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isError) rej(new Error('Не удалось получить фотографии'));
      res({ status: 'success', details: galleryPagePhotos });
    }, 300);
  });
};

export const galleryPagePhotos: Photo[] = [
  {
    src: 'https://sun9-17.userapi.com/impg/y7CbrCa14S0U7fYBqO_RdfYXvjLDjYcoYrX5ug/xatE72NU4cg.jpg?size=2560x1703&quality=95&sign=912888df24a05b16a9958523e9214ae9&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-38.userapi.com/impg/tC0r-2GNLKDxwHtga3vlnyT-b9LkwZntszrwdQ/ERP8Uxs4zNU.jpg?size=1280x851&quality=95&sign=3ba82b7dba2c666b12ae2a0caddc0a28&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-14.userapi.com/impg/cicXG0y4C6Fha27joI9yP0TNeCl-H-KV8QcKew/srPdXgWupNw.jpg?size=1280x853&quality=95&sign=207e85dd635587a38fbad880269764a3&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-13.userapi.com/impg/Mlu1UWUDodb8KG-_1WnKjV9rusSVogWrbuwtfw/Kc73IEh_v9I.jpg?size=1280x851&quality=95&sign=0f52478d91429325d850e5fbb8feb836&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-36.userapi.com/impg/bjWxx7WzypwNAC1JZk--dZ6WpIt-y3xAdpp2cg/25z8OLMceOg.jpg?size=1280x851&quality=95&sign=9366134ca9b1ced3e530f22e10bcd5c8&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-60.userapi.com/impg/Y8OzK4IayeMJtZa6cc5AHvPTaHaoKHqm0KN2Vg/k3TI77Xla7Y.jpg?size=1280x851&quality=95&sign=928b3e1fb7a56e523d47225c04b86117&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-49.userapi.com/impg/sKiojU6VpMXwIfyivpOMILQtw89DGClExhAe5w/Kj52ZHpWG-U.jpg?size=1280x853&quality=95&sign=921b306a95659808a71eb167748984ee&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-80.userapi.com/impg/LLh_gEEUsBPGCZU8EDKFVQn-S7HwGA_8FmTPTg/obL6LmflXUI.jpg?size=1280x853&quality=95&sign=b1cd7f3a978a75bccb18c9a7272be3bb&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-39.userapi.com/impg/c9k7rszficfA_TWWjZMFSp8Qni6N8CXWWya6mw/Hwa9REUPQ5g.jpg?size=1280x853&quality=95&sign=029a3ecd4da85cff88f5122243a5c34e&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-52.userapi.com/impg/6znI_d9w6Ki83VYfvosJIl1NF-f2mI4EyR32Aw/I4x5ix-kBBE.jpg?size=1280x853&quality=95&sign=f1374cacd3c46548e577905b1d7f2ef0&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-25.userapi.com/impg/4IvwKnGDngzAAEkyFLB66OxipkggpiqK_z7ZDA/o68HEtdRrFw.jpg?size=1280x853&quality=95&sign=a0052c584f5c58e43204882d1082159a&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-58.userapi.com/impg/5bT4TZEpl9hfTSlTxnnHvyIXzVg-_Z-zEP6K-w/lUgIru_IhcA.jpg?size=1280x851&quality=95&sign=9b5cfaed38d45e5537623b79c3fc6b82&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-51.userapi.com/impg/IuRNORLVYrGIbCfu7PI51JjddmvINrZuGjwKYA/7RovZxR5tLg.jpg?size=1280x853&quality=95&sign=d8f6bb69c92678b657ceefe8332d19b4&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-5.userapi.com/impg/g51FIMxCgOoKgtF9fTlKvHxt8nbSwoWuUtXDiA/T1DDU7J21GM.jpg?size=1280x851&quality=95&sign=f70311c1a416ea5b3983717cd69bc594&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-20.userapi.com/impg/mJ2ZCWbVvWDrmxrD1S3QNd6PmXBN6N869AcqrA/2SzuLLBMDG8.jpg?size=1280x851&quality=95&sign=a51525a1c6304f31489197731cf36dc5&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-73.userapi.com/impg/IJy0ToGLWrrvYW2knnt2ngM2k9uACkHyzLHKoA/295FqZRFZjk.jpg?size=1280x853&quality=95&sign=6daca09660017ce2283cafcb4cf71816&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-21.userapi.com/impg/-yau0UqB853vThr66JnqhJZBr4xfoduvyOBmuA/MqXszklZE5Y.jpg?size=1280x851&quality=95&sign=d9439f4f94204d0d597a8365c8f572eb&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-22.userapi.com/impg/7_s9g_xdrsUVq0OJWv2iYEn3xcK4wBtGTBEHMg/Zy6FgKkenn8.jpg?size=1280x851&quality=95&sign=64b892cf30454e464e165923f22441b0&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-51.userapi.com/impg/R0U5iKF7WcEPe30eG_ibZYozYJPIcdv0V-uGtA/cv1vo-jtrYg.jpg?size=1280x851&quality=95&sign=090553d1bd1b62569af217ebd9676506&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-55.userapi.com/impg/ezy3P_e6lljX8loXQOQJyBx_cTGI6U2HjG6MbA/qNGtTBbmpbs.jpg?size=718x1080&quality=95&sign=ce39634af333f6af0a9956834b1d405f&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-27.userapi.com/impg/VTO7D7Bw3yCHnBzROiffYLuvX8B1BQZwcO0UYQ/GUkHirJk7Nk.jpg?size=1280x853&quality=95&sign=a965f863d6b66df3d65df58343cb6504&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },
  {
    src: 'https://sun9-23.userapi.com/impg/BUkX8GWGlnQtp8w9DG6idtzjVbuQTjFJjS1-tw/wkF-81lrCpY.jpg?size=1280x851&quality=95&sign=50c15682c073bf78ca4dbf82f8895826&type=album',
    date: '9 мая 2022 г.',
    alt: 'Бессмертный полк в «Сириусе» 2022',
  },

  {
    src: 'https://sun9-15.userapi.com/impg/TAvdwNrDzNr5An1AyHjDTtr-nRuBP9viEp21bA/1FA4Z70YXUI.jpg?size=1280x853&quality=95&sign=5821b0a0affefddc9fedc46805b7937c&type=album',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sun9-21.userapi.com/impg/D2WHf3b7DWZjXL0q0dDTRE5g2y6lvs_tMRmFsQ/J3qgV6ROFeI.jpg?size=1280x851&quality=95&sign=34f15ef4b5175eca4431e8bae790d650&type=album',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sun9-23.userapi.com/impg/42iYQHytrW51o2C6yh40FLW91WOyBh1maz3IQw/LX88ib0IcN8.jpg?size=1280x853&quality=95&sign=c1f10bf6183e389d5abcce83c5385925&type=album',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sun9-74.userapi.com/impg/FaOGW7xn0k5gBPO5VMQKUVvLbmpfqCXGm2xpKg/NX75zQvf-AE.jpg?size=1280x851&quality=95&sign=21f3e6074e1ad67298e22c0940a4ce7a&type=album',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sun9-79.userapi.com/impg/cf_GeLsb8mtk5HKFwT6I_1sZNGUolTFnssjj_w/bEnwoua3S-Q.jpg?size=1280x851&quality=95&sign=50fac86064cacca3dd71788d2e8db8eb&type=album',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sun9-26.userapi.com/impg/uF1eBIlp_cwDWAUso6fFXwX-10tZSV7EZSIQIg/gPXLl-7qWRc.jpg?size=1280x851&quality=95&sign=2e393710fb7b5a1b9d49779e68cf616c&type=album',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sun9-31.userapi.com/impg/pKNrdFk8uM3ejKs5D8tvLri1GicnPeotBoEqMQ/IMBR51-078Y.jpg?size=1280x851&quality=95&sign=cc72073de5b4a80bb68f63c3c410700a&type=album',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sochisirius.ru/uploads/2023/05/DSC_4383.jpg',
    date: '9 мая 2023 г.',
    alt: 'День Победы в «Сириусе» 2023',
  },
  {
    src: 'https://sun77-2.userapi.com/impg/dXHRXe76LTAurB6eeNydwBCVoX8KdZ4XQxOd0A/69nTWc_i94k.jpg?size=1280x851&quality=95&sign=4ddc523363c19e765b8aa75c0574c203&type=album',
    date: 'Май 2024 г.',
    alt: 'Акция «Георгиевская лента» 2024 г.',
  },
  {
    src: 'https://sun9-30.userapi.com/impg/3N8Nr3MqfVG0EtpTyhugwZbeD4ANikSpk9-sMg/O6vVuU3XTvs.jpg?size=1280x851&quality=95&sign=b5e18d78a10f490ec8453ba4bf318f22&type=album',
    date: 'Май 2024 г.',
    alt: 'Акция «Георгиевская лента» 2024 г.',
  },
  {
    src: 'https://sun9-64.userapi.com/impg/ILvJ5R3ZkSFpOXb6uIGAYIHAF3HghQrT0ggPEQ/2HWB0mBhQW0.jpg?size=1280x851&quality=95&sign=1acf77dcaa1e75829fde76942b133fa1&type=album',
    date: 'Май 2024 г.',
    alt: 'Акция «Георгиевская лента» 2024 г.',
  },
  {
    src: 'https://sun9-44.userapi.com/impg/ueQd-kUz49G6ODuZMqw9QuCcoxwN-4uiL19a8Q/I88z6MEc4L0.jpg?size=1280x851&quality=95&sign=1dd56a14464b5909708ad5b343eaab84&type=album',
    date: 'Май 2024 г.',
    alt: 'Акция «Георгиевская лента» 2024 г.',
  },
  {
    src: 'https://sun9-70.userapi.com/impg/iCa2dg3MltCZor2LluB5ziQCpjp98OWuz4jWtg/JlznRakNCa0.jpg?size=1280x851&quality=95&sign=18bafe03a10f0fa450645fafd64558a6&type=album',
    date: 'Май 2024 г.',
    alt: 'Акция «Георгиевская лента» 2024 г.',
  },
  {
    src: 'https://sun9-74.userapi.com/impg/V6nLUGJuMPqh1PhQc0uyZP_5kvpeQrUBQrbacQ/Gs10z-ElW9s.jpg?size=1280x851&quality=95&sign=486145a2548da99abb5375edd643c981&type=album',
    date: 'Май 2024 г.',
    alt: 'Акция «Георгиевская лента» 2024 г.',
  },
  {
    src: 'https://sun9-77.userapi.com/impg/sKBl2-z6Eu3DpqBoTNVs5g_OFrqPBbrm7-lmZg/VM2d5tLXpgw.jpg?size=1280x851&quality=95&sign=2b339bb1ab668134e1a96ad4a33f48bc&type=album',
    date: '7 мая 2024 г.',
    alt: 'Торжественная линейка «Мы этой памяти верны»',
  },
  {
    src: 'https://sun9-36.userapi.com/impg/y6DVF7UWGZpHyAv2QdOurIA3ySvv1pB92FheCg/lcdTCeFqWVg.jpg?size=1280x851&quality=95&sign=1c3ac9d3b14b417a606c7dbc54709d29&type=album',
    date: '7 мая 2024 г.',
    alt: 'Торжественная линейка «Мы этой памяти верны»',
  },
  {
    src: 'https://sun9-63.userapi.com/impg/zdPj2dMttftcBqo9GGgxZTHu33IzqJ5_WOIqJA/U-ILOdkuJqo.jpg?size=1280x851&quality=95&sign=49e9efec7ee434e29784e1436b10738f&type=album',
    date: '7 мая 2024 г.',
    alt: 'Торжественная линейка «Мы этой памяти верны»',
  },
  {
    src: 'https://sun9-73.userapi.com/impg/odv6N6rQ6ycxvDTKtU0WIrb2F41CNgwtsPRbLw/lq3gZHUIECE.jpg?size=1280x851&quality=95&sign=b45a67e5b16cf6c2f229ecf0c7f3292a&type=album',
    date: '7 мая 2024 г.',
    alt: 'Торжественная линейка «Мы этой памяти верны»',
  },
  {
    src: 'https://sun9-69.userapi.com/impg/eFX8CliJMjfb_wHWDIRGZiYDtokUFTTT2nOYrQ/PkFDxEVQa_o.jpg?size=1280x851&quality=95&sign=08804efd3b74fa4ad7e80c7ab486f0ef&type=album',
    date: '7 мая 2024 г.',
    alt: 'Торжественная линейка «Мы этой памяти верны»',
  },
  {
    src: 'https://sun9-73.userapi.com/impg/4tiRnU0oTf4-KLtrf0GdKZbrQYNT7qy44QVhzA/5Ur351-j2_I.jpg?size=1280x851&quality=95&sign=c05ef8269bed524b9dbe09bb3f75de35&type=album',
    date: '7 мая 2024 г.',
    alt: 'Фестиваль военно-патриотической песни',
  },
  {
    src: 'https://sun9-80.userapi.com/impg/ksdpDVfo5vBsPZSAyLoI_V0cvvLAHfJfvyjIWQ/bawxv-mlqT0.jpg?size=1280x851&quality=95&sign=e8fe31b65a02e3b124771d6206814369&type=album',
    date: '7 мая 2024 г.',
    alt: 'Фестиваль военно-патриотической песни',
  },
  {
    src: 'https://sun9-46.userapi.com/impg/e3p1bnyCSFrGZMLbDrsKUibMKDQ4PzkVMvKrUQ/O81jVD9gRHA.jpg?size=1280x851&quality=95&sign=f0d8da2b15f13346c40aaf7536767e77&type=album',
    date: '7 мая 2024 г.',
    alt: 'Фестиваль военно-патриотической песни',
  },
  {
    src: 'https://sun9-74.userapi.com/impg/jMqiiVGhW9ZEif8IpbKW0-pJKeZPGnI6CC3SYQ/4-yLB6y8zSI.jpg?size=1280x851&quality=95&sign=9c09b018b857f3daa68446b02e40b58b&type=album',
    date: '7 мая 2024 г.',
    alt: 'Фестиваль военно-патриотической песни',
  },
  {
    src: 'https://sun9-9.userapi.com/impg/F-wHF5rMobn-Xbd9bIFfjIteR40SEdUVA_BhNA/lPPNSGdW8Pg.jpg?size=1280x851&quality=95&sign=25273a6dfed21e14473323300b7552f7&type=album',
    date: '7 мая 2024 г.',
    alt: 'Фестиваль военно-патриотической песни',
  },
  {
    src: 'https://sun9-16.userapi.com/impg/b9QlZwlzwG3F0Iy36v67e-giq5vm5lKrwGxvjQ/htBV-WmtEU8.jpg?size=1280x851&quality=95&sign=b6a422909ad550d2269ead776051c957&type=album',
    date: '7 мая 2024 г.',
    alt: 'Фестиваль военно-патриотической песни',
  },
  {
    src: 'https://sun9-12.userapi.com/impg/HhZ_O_IsOor4nIP_nwfXqB84Sh-po7H60a0Mzg/6ZSi9jPEGoY.jpg?size=1280x851&quality=95&sign=f02815aadee001e271994f11a449d543&type=album',
    date: '7 мая 2024 г.',
    alt: 'Фестиваль военно-патриотической песни',
  },
].reverse();

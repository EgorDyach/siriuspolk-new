import { ApiResponse } from '@shared/api/types';
import { Medal } from '../model/types';
const fakeMedals: Medal[] = [
  {
    src: '/images/medals/medalOfServiceUSSR3.png',
    name: 'Орден «За службу Родине в Вооружённых Силах СССР» III степени',
    id: 1,
  },
  {
    src: '/images/medals/medalOfServiceUSSR2.png',
    name: 'Орден «За службу Родине в Вооружённых Силах СССР» II степени',
    id: 2,
  },
  {
    src: '/images/medals/medalOfServiceUSSR1.png',
    name: 'Орден «За службу Родине в Вооружённых Силах СССР» I степени',
    id: 3,
  },
  {
    src: '/images/medals/medalOfPersonalBrave.png',
    name: 'Орден «За личное мужество»',
    id: 4,
  },
  {
    src: '/images/medals/medalOfWorkGlory3.png',
    name: 'Орден Трудовой Славы III степени',
    id: 5,
  },
  {
    src: '/images/medals/medalOfWorkGlory2.png',
    name: 'Орден Трудовой Славы II степени',
    id: 6,
  },
  {
    src: '/images/medals/medalOfWorkGlory1.png',
    name: 'Орден Трудовой Славы I степени',
    id: 7,
  },
  {
    src: '/images/medals/medalOfWorldFriendShip.png',
    name: 'Орден Дружбы народов',
    id: 8,
  },
  {
    src: '/images/medals/medalOfMotherGlory3.png',
    name: 'Орден «Материнская слава» III степени',
    id: 9,
  },
  {
    src: '/images/medals/medalOfMotherGlory2.png',
    name: 'Орден «Материнская слава» II степени',
    id: 10,
  },
  {
    src: '/images/medals/medalOfMotherGlory1.png',
    name: 'Орден «Материнская слава» I степени',
    id: 11,
  },
  {
    src: '/images/medals/medalOfOrderNakhimov2.png',
    name: 'Орден Нахимова II степени',
    id: 12,
  },
  {
    src: '/images/medals/medalOfOrderNakhimov1.png',
    name: 'Орден Нахимова I степени',
    id: 13,
  },
  {
    src: '/images/medals/medalOfUshakov2.png',
    name: 'Орден Ушакова II степени',
    id: 14,
  },
  {
    src: '/images/medals/medalOfUshakov1.png',
    name: 'Орден Ушакова I степени',
    id: 15,
  },
  {
    src: '/images/medals/medalOfGlory3.png',
    name: 'Орден Славы III степени',
    id: 16,
  },
  {
    src: '/images/medals/medalOfGlory2.png',
    name: 'Орден Славы II степени',
    id: 17,
  },
  {
    src: '/images/medals/medalOfGlory1.png',
    name: 'Орден Славы I степени',
    id: 18,
  },
  {
    src: '/images/medals/medalOfKhmelnizkiy3.png',
    name: 'Орден Богдана Хмельницкого III степени',
    id: 19,
  },
  {
    src: '/images/medals/medalOfKhmelnizkiy2.png',
    name: 'Орден Богдана Хмельницкого II степени',
    id: 20,
  },
  {
    src: '/images/medals/medalOfKhmelnizkiy1.png',
    name: 'Орден Богдана Хмельницкого I степени',
    id: 21,
  },
  {
    src: '/images/medals/medalOfNevskiy.png',
    name: 'Орден Александра Невского',
    id: 22,
  },
  {
    src: '/images/medals/medalOfKutuzov3.png',
    name: 'Орден Кутузова III степени',
    id: 23,
  },
  {
    src: '/images/medals/medalOfKutuzov2.png',
    name: 'Орден Кутузова II степени',
    id: 24,
  },
  {
    src: '/images/medals/medalOfKutuzov1.png',
    name: 'Орден Кутузова I степени',
    id: 25,
  },
  {
    src: '/images/medals/medalOfSuvorov3.png',
    name: 'Орден Суворова III степени',
    id: 26,
  },
  {
    src: '/images/medals/medalOfSuvorov2.png',
    name: 'Орден Суворова II степени',
    id: 27,
  },
  {
    src: '/images/medals/medalOfSuvorov1.png',
    name: 'Орден Суворова I степени',
    id: 28,
  },
  {
    src: '/images/medals/medalOfGPW2.png',
    name: 'Орден Отечественной войны II степени',
    id: 29,
  },
  {
    src: '/images/medals/medalOfGPW1.png',
    name: 'Орден Отечественной войны I степени',
    id: 30,
  },
  {
    src: '/images/medals/medalOfHonour.png',
    name: 'Орден «Знак Почёта»',
    id: 31,
  },
  {
    src: '/images/medals/medalOfRedStar.png',
    name: 'Орден Красной Звезды',
    id: 32,
  },
  {
    src: '/images/medals/medalOfRedNiceWork.png',
    name: 'Орден Трудового Красного Знамени',
    id: 33,
  },
  {
    src: '/images/medals/medalOfMother1.png',
    name: '«Медаль материнства» I степени',
    id: 34,
  },
  {
    src: '/images/medals/medalOfMother2.png',
    name: '«Медаль материнства» II степени',
    id: 35,
  },
  {
    src: '/images/medals/medalOfMainHero.png',
    name: 'Герой Советского Союза',
    id: 36,
  },
  {
    src: '/images/medals/medalOfWorkHero.png',
    name: 'Герой Социалистического Труда',
    id: 37,
  },
  {
    src: '/images/medals/medalOfMotherHero.png',
    name: 'Мать-героиня',
    id: 38,
  },
  {
    src: '/images/medals/medalOfMainWin.png',
    name: 'Орден «Победа»',
    id: 39,
  },
  {
    src: '/images/medals/medalOfOrdenLenin.png',
    name: 'Орден Ленина',
    id: 40,
  },
  {
    src: '/images/medals/medalOfOctoberOrden.png',
    name: 'Орден Октябрьской Революции',
    id: 41,
  },
  {
    src: '/images/medals/medalOfRedFlag.png',
    name: 'Орден Красного Знамени',
    id: 42,
  },
  {
    src: '/images/medals/medalOfBravery.png',
    name: 'Медаль «За отвагу»',
    id: 43,
  },
  {
    src: '/images/medals/medalOfUshakov.png',
    name: 'Медаль Ушакова',
    id: 44,
  },
  {
    src: '/images/medals/medalOfMilitaryWins.png',
    name: 'Медаль «За боевые заслуги»',
    id: 45,
  },
  {
    src: '/images/medals/medalOfNahimov.png',
    name: 'Медаль Нахимова',
    id: 46,
  },
  {
    src: '/images/medals/medalOfWorkWins.png',
    name: 'Медаль «За трудовую доблесть»',
    id: 47,
  },
  {
    src: '/images/medals/medalOfNiceWork.png',
    name: 'Медаль «За трудовое отличие»',
    id: 48,
  },
  {
    src: '/images/medals/medalOfLenin100.png',
    name: 'Медаль «В ознаменование 100-летия со дня рождения Владимира Ильича Ленина»',
    id: 49,
  },
  {
    src: '/images/medals/medalOfPartizan1.png',
    name: 'Медаль «Партизану Отечественной войны» 1 степени',
    id: 50,
  },
  {
    src: '/images/medals/medalOfPartizan2.png',
    name: 'Медаль «Партизану Отечественной войны» 2 степени',
    id: 51,
  },
  {
    src: '/images/medals/medalOfGuard.png',
    name: 'Медаль «За отличие в охране государственной границы СССР»',
    id: 52,
  },
  {
    src: '/images/medals/medalOfNiceMilitary1.png',
    name: 'Медаль «За отличие в воинской службе» 1 степени',
    id: 53,
  },
  {
    src: '/images/medals/medalOfNiceMilitary2.png',
    name: 'Медаль «За отличие в воинской службе» 2 степени',
    id: 54,
  },
  {
    src: '/images/medals/medalOfNiceSecurity.png',
    name: 'Медаль «За отличную службу по охране общественного порядка»',
    id: 55,
  },
  {
    src: '/images/medals/medalOfFireWork.png',
    name: 'Медаль «За отвагу на пожаре»',
    id: 56,
  },
  {
    src: '/images/medals/medalOfDrownSave.png',
    name: 'Медаль «За спасение утопающих»',
    id: 57,
  },
  {
    src: '/images/medals/medalOfSaveLeningrad.png',
    name: 'Медаль «За оборону Ленинграда»',
    id: 58,
  },
  {
    src: '/images/medals/medalOfSaveMoscow.png',
    name: 'Медаль «За оборону Москвы»',
    id: 59,
  },
  {
    src: '/images/medals/medalOfSaveOdessa.png',
    name: 'Медаль «За оборону Одессы»',
    id: 60,
  },
  {
    src: '/images/medals/medalOfSaveSevastopol.png',
    name: 'Медаль «За оборону Севастополя»',
    id: 61,
  },
  {
    src: '/images/medals/medalOfSaveStalingrad.png',
    name: 'Медаль «За оборону Сталинграда»',
    id: 62,
  },
  {
    src: '/images/medals/medalOfSaveKiev.png',
    name: 'Медаль «За оборону Киева»',
    id: 63,
  },
  {
    src: '/images/medals/medalOfSaveCaucasus.png',
    name: 'Медаль «За оборону Кавказа»',
    id: 64,
  },
  {
    src: '/images/medals/medalOfSavePolar.png',
    name: 'Медаль «За оборону Советского Заполярья»',
    id: 65,
  },
  {
    src: '/images/medals/medalOfWinGermany.png',
    name: 'Медаль «За победу над Германи��й в Великой Отечественной войне 1941—1945 гг.»',
    id: 66,
  },
  {
    src: '/images/medals/medalOfWin20.png',
    name: 'Юбилейная медаль «Двадцать лет Победы в Великой Отечественной войне 1941—1945 гг.»',
    id: 67,
  },
  {
    src: '/images/medals/medalOfWin30.png',
    name: 'Юбилейная медаль «Тридцать лет Победы в Великой Отечественной войне 1941—1945 гг.»',
    id: 68,
  },
  {
    src: '/images/medals/medalOfWin40.png',
    name: 'Юбилейная медаль «Сорок лет Победы в Великой Отечественной войне 1941—1945 гг.»',
    id: 69,
  },
  {
    src: '/images/medals/medalOfWinJapan.png',
    name: 'Медаль «За победу над Японией»',
    id: 70,
  },
  {
    src: '/images/medals/medalOfTakingBudapest.png',
    name: 'Медаль «За взятие Будапешта»',
    id: 71,
  },
  {
    src: '/images/medals/medalOfTakingKoenigsberg.png',
    name: 'Медаль «За взятие Кёнигсберга»',
    id: 72,
  },
  {
    src: '/images/medals/medalOfTakingVeinna.png',
    name: 'Медаль «За взятие Вены»',
    id: 73,
  },
  {
    src: '/images/medals/medalOfTakingBerlin.png',
    name: 'Медаль «За взятие Берлина»',
    id: 74,
  },
  {
    src: '/images/medals/medalOfLiberationBelgrad.png',
    name: 'Медаль «За освобождение Белграда»',
    id: 75,
  },
  {
    src: '/images/medals/medalOfLiberationWarsaw.png',
    name: 'Медаль «За освобождение Варшавы»',
    id: 76,
  },
  {
    src: '/images/medals/medalOfLiberationPrague.png',
    name: 'Медаль «За освобождение Праги»',
    id: 77,
  },
  {
    src: '/images/medals/medalOfVeryNiceWorkWhileWar.png',
    name: 'Медаль «За доблестный труд в Великой Отечественной войне 1941—1945 гг.»',
    id: 78,
  },
  {
    src: '/images/medals/medalOfVeteranOfWork.png',
    name: 'Медаль «Ветеран труда»',
    id: 79,
  },
  {
    src: '/images/medals/medalOfVeteranOfArmedForces.png',
    name: 'Медаль «Ветеран Вооружённых Сил СССР»',
    id: 80,
  },
  {
    src: '/images/medals/medalOfStrengthening.png',
    name: 'Медаль «За укрепление боевого содружества»',
    id: 81,
  },
  {
    src: '/images/medals/medalOfRecoveryFactories.png',
    name: 'Медаль «За восстановление предприятий чёрной металлургии Юга»',
    id: 82,
  },
  {
    src: '/images/medals/medalOfRecoveryCoal.png',
    name: 'Медаль «За восстановление угольных шахт Донбасса»',
    id: 83,
  },
  {
    src: '/images/medals/medalOfDevelopmentLands.png',
    name: 'Медаль «За освоение целинных земель»',
    id: 84,
  },
  {
    src: '/images/medals/medalOfBuildingHighway.png',
    name: 'Медаль «За строительство Байкало-Амурской магистрали»',
    id: 85,
  },
  {
    src: '/images/medals/medalOfTransformationLand.png',
    name: 'Медаль «За преобразование Нечерноземья РСФСР»',
    id: 86,
  },
  {
    src: '/images/medals/medalOfDevelopmentOil.png',
    name: 'Медаль «За освоение недр и развитие нефтегазового комплекса Западной Сибири»',
    id: 87,
  },
  {
    src: '/images/medals/medalOfMilitary20years.png',
    name: 'Юбилейная медаль «XX лет Рабоче-Крестьянской Красной Армии»',
    id: 88,
  },
  {
    src: '/images/medals/medalOfMilitary30years.png',
    name: 'Юбилейная медаль «30 лет Советской Армии и Флота»',
    id: 89,
  },
  {
    src: '/images/medals/medalOfMilitary40years.png',
    name: 'Юбилейная медаль «40 лет Вооружённых Сил СССР»',
    id: 90,
  },
  {
    src: '/images/medals/medalOfMilitary50years.png',
    name: 'Юбилейная медаль «50 лет Вооружённых Сил СССР»',
    id: 91,
  },
  {
    src: '/images/medals/medalOfMilitary60years.png',
    name: 'Юбилейная медаль «60 лет Вооружённых Сил СССР»',
    id: 92,
  },
  {
    src: '/images/medals/medalOfMilitary70years.png',
    name: 'Юбилейная медаль «70 лет Вооружённых Сил СССР»',
    id: 93,
  },
  {
    src: '/images/medals/medalOfPolice50years.png',
    name: 'Юбилейная медаль «50 лет советской милиции»',
    id: 94,
  },
  {
    src: '/images/medals/medalOfMoscow800years.png',
    name: 'Медаль «В память 800-летия Москвы»',
    id: 95,
  },
  {
    src: '/images/medals/medalOfLeningrad250years.png',
    name: 'Медаль «В память 250-летия Ленинграда»',
    id: 96,
  },
  {
    src: '/images/medals/medalOfKiev1500years.png',
    name: 'Медаль «В память 1500-летия Киева»',
    id: 97,
  },
  {
    src: '/images/medals/medalOfBestMilitary1.png',
    name: 'Медаль «За безупречную службу» 1 степени',
    id: 98,
  },
  {
    src: '/images/medals/medalOfBestMilitary2.png',
    name: 'Медаль «За безупречную службу» 2 степени',
    id: 99,
  },
  {
    src: '/images/medals/medalOfBestMilitary3.png',
    name: 'Медаль «За безупречную службу» 3 степени',
    id: 100,
  },
  {
    src: '/images/medals/other.png',
    name: 'Другое',
    id: 101,
  },
];
export const fakeRequestMedals = (): Promise<ApiResponse<Medal>> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ status: 'success', details: fakeMedals });
    }, 200);
  });
};

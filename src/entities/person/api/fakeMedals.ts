import { ApiResponse } from '@shared/api/types';
import { Medal } from '../model/types';
const fakeMedals: Medal[] = [
  {
    src: '/medals/medalOfServiceUSSR3.png',
    name: 'Орден «За службу Родине в Вооружённых Силах СССР» III степени',
    id: 1,
  },
  {
    src: '/medals/medalOfServiceUSSR2.png',
    name: 'Орден «За службу Родине в Вооружённых Силах СССР» II степени',
    id: 2,
  },
  {
    src: '/medals/medalOfServiceUSSR1.png',
    name: 'Орден «За службу Родине в Вооружённых Силах СССР» I степени',
    id: 3,
  },
  {
    src: '/medals/medalOfPersonalBrave.png',
    name: 'Орден «За личное мужество»',
    id: 4,
  },
  {
    src: '/medals/medalOfWorkGlory3.png',
    name: 'Орден Трудовой Славы III степени',
    id: 5,
  },
  {
    src: '/medals/medalOfWorkGlory2.png',
    name: 'Орден Трудовой Славы II степени',
    id: 6,
  },
  {
    src: '/medals/medalOfWorkGlory1.png',
    name: 'Орден Трудовой Славы I степени',
    id: 7,
  },
  {
    src: '/medals/medalOfWorldFriendShip.png',
    name: 'Орден Дружбы народов',
    id: 8,
  },
  {
    src: '/medals/medalOfMotherGlory3.png',
    name: 'Орден «Материнская слава» III степени',
    id: 9,
  },
  {
    src: '/medals/medalOfMotherGlory2.png',
    name: 'Орден «Материнская слава» II степени',
    id: 10,
  },
  {
    src: '/medals/medalOfMotherGlory1.png',
    name: 'Орден «Материнская слава» I степени',
    id: 11,
  },
  {
    src: '/medals/medalOfOrderNakhimov2.png',
    name: 'Орден Нахимова II степени',
    id: 12,
  },
  {
    src: '/medals/medalOfOrderNakhimov1.png',
    name: 'Орден Нахимова I степени',
    id: 13,
  },
  {
    src: '/medals/medalOfUshakov2.png',
    name: 'Орден Ушакова II степени',
    id: 14,
  },
  {
    src: '/medals/medalOfUshakov1.png',
    name: 'Орден Ушакова I степени',
    id: 15,
  },
  {
    src: '/medals/medalOfGlory3.png',
    name: 'Орден Славы III степени',
    id: 16,
  },
  {
    src: '/medals/medalOfGlory2.png',
    name: 'Орден Славы II степени',
    id: 17,
  },
  {
    src: '/medals/medalOfGlory1.png',
    name: 'Орден Славы I степени',
    id: 18,
  },
  {
    src: '/medals/medalOfKhmelnizkiy3.png',
    name: 'Орден Богдана Хмельницкого III степени',
    id: 19,
  },
  {
    src: '/medals/medalOfKhmelnizkiy2.png',
    name: 'Орден Богдана Хмельницкого II степени',
    id: 20,
  },
  {
    src: '/medals/medalOfKhmelnizkiy1.png',
    name: 'Орден Богдана Хмельницкого I степени',
    id: 21,
  },
  {
    src: '/medals/medalOfNevskiy.png',
    name: 'Орден Александра Невского',
    id: 22,
  },
  {
    src: '/medals/medalOfKutuzov3.png',
    name: 'Орден Кутузова III степени',
    id: 23,
  },
  {
    src: '/medals/medalOfKutuzov2.png',
    name: 'Орден Кутузова II степени',
    id: 24,
  },
  {
    src: '/medals/medalOfKutuzov1.png',
    name: 'Орден Кутузова I степени',
    id: 25,
  },
  {
    src: '/medals/medalOfSuvorov3.png',
    name: 'Орден Суворова III степени',
    id: 26,
  },
  {
    src: '/medals/medalOfSuvorov2.png',
    name: 'Орден Суворова II степени',
    id: 27,
  },
  {
    src: '/medals/medalOfSuvorov1.png',
    name: 'Орден Суворова I степени',
    id: 28,
  },
  {
    src: '/medals/medalOfGPW2.png',
    name: 'Орден Отечественной войны II степени',
    id: 29,
  },
  {
    src: '/medals/medalOfGPW1.png',
    name: 'Орден Отечественной войны I степени',
    id: 30,
  },
  {
    src: '/medals/medalOfHonour.png',
    name: 'Орден «Знак Почёта»',
    id: 31,
  },
  {
    src: '/medals/medalOfRedStar.png',
    name: 'Орден Красной Звезды',
    id: 32,
  },
  {
    src: '/medals/medalOfRedNiceWork.png',
    name: 'Орден Трудового Красного Знамени',
    id: 33,
  },
  {
    src: '/medals/medalOfMother1.png',
    name: '«Медаль материнства» I степени',
    id: 34,
  },
  {
    src: '/medals/medalOfMother2.png',
    name: '«Медаль материнства» II степени',
    id: 35,
  },
  {
    src: '/medals/medalOfMainHero.png',
    name: 'Герой Советского Союза',
    id: 36,
  },
  {
    src: '/medals/medalOfWorkHero.png',
    name: 'Герой Социалистического Труда',
    id: 37,
  },
  {
    src: '/medals/medalOfMotherHero.png',
    name: 'Мать-героиня',
    id: 38,
  },
  {
    src: '/medals/medalOfMainWin.png',
    name: 'Орден «Победа»',
    id: 39,
  },
  {
    src: '/medals/medalOfOrdenLenin.png',
    name: 'Орден Ленина',
    id: 40,
  },
  {
    src: '/medals/medalOfOctoberOrden.png',
    name: 'Орден Октябрьской Революции',
    id: 41,
  },
  {
    src: '/medals/medalOfRedFlag.png',
    name: 'Орден Красного Знамени',
    id: 42,
  },
  {
    src: '/medals/medalOfBravery.png',
    name: 'Медаль «За отвагу»',
    id: 43,
  },
  {
    src: '/medals/medalOfUshakov.png',
    name: 'Медаль Ушакова',
    id: 44,
  },
  {
    src: '/medals/medalOfMilitaryWins.png',
    name: 'Медаль «За боевые заслуги»',
    id: 45,
  },
  {
    src: '/medals/medalOfNahimov.png',
    name: 'Медаль Нахимова',
    id: 46,
  },
  {
    src: '/medals/medalOfWorkWins.png',
    name: 'Медаль «За трудовую доблесть»',
    id: 47,
  },
  {
    src: '/medals/medalOfNiceWork.png',
    name: 'Медаль «За трудовое отличие»',
    id: 48,
  },
  {
    src: '/medals/medalOfLenin100.png',
    name: 'Медаль «В ознаменование 100-летия со дня рождения Владимира Ильича Ленина»',
    id: 49,
  },
  {
    src: '/medals/medalOfPartizan1.png',
    name: 'Медаль «Партизану Отечественной войны» 1 степени',
    id: 50,
  },
  {
    src: '/medals/medalOfPartizan2.png',
    name: 'Медаль «Партизану Отечественной войны» 2 степени',
    id: 51,
  },
  {
    src: '/medals/medalOfGuard.png',
    name: 'Медаль «За отличие в охране государственной границы СССР»',
    id: 52,
  },
  {
    src: '/medals/medalOfNiceMilitary1.png',
    name: 'Медаль «За отличие в воинской службе» 1 степени',
    id: 53,
  },
  {
    src: '/medals/medalOfNiceMilitary2.png',
    name: 'Медаль «За отличие в воинской службе» 2 степени',
    id: 54,
  },
  {
    src: '/medals/medalOfNiceSecurity.png',
    name: 'Медаль «За отличную службу по охране общественного порядка»',
    id: 55,
  },
  {
    src: '/medals/medalOfFireWork.png',
    name: 'Медаль «За отвагу на пожаре»',
    id: 56,
  },
  {
    src: '/medals/medalOfDrownSave.png',
    name: 'Медаль «За спасение утопающих»',
    id: 57,
  },
  {
    src: '/medals/medalOfSaveLeningrad.png',
    name: 'Медаль «За оборону Ленинграда»',
    id: 58,
  },
  {
    src: '/medals/medalOfSaveMoscow.png',
    name: 'Медаль «За оборону Москвы»',
    id: 59,
  },
  {
    src: '/medals/medalOfSaveOdessa.png',
    name: 'Медаль «За оборону Одессы»',
    id: 60,
  },
  {
    src: '/medals/medalOfSaveSevastopol.png',
    name: 'Медаль «За оборону Севастополя»',
    id: 61,
  },
  {
    src: '/medals/medalOfSaveStalingrad.png',
    name: 'Медаль «За оборону Сталинграда»',
    id: 62,
  },
  {
    src: '/medals/medalOfSaveKiev.png',
    name: 'Медаль «За оборону Киева»',
    id: 63,
  },
  {
    src: '/medals/medalOfSaveCaucasus.png',
    name: 'Медаль «За оборону Кавказа»',
    id: 64,
  },
  {
    src: '/medals/medalOfSavePolar.png',
    name: 'Медаль «За оборону Советского Заполярья»',
    id: 65,
  },
  {
    src: '/medals/medalOfWinGermany.png',
    name: 'Медаль «За победу над Германией в Великой Отечественной войне 1941—1945 гг.»',
    id: 66,
  },
  {
    src: '/medals/medalOfWin20.png',
    name: 'Юбилейная медаль «Двадцать лет Победы в Великой Отечественной войне 1941—1945 гг.»',
    id: 67,
  },
  {
    src: '/medals/medalOfWin30.png',
    name: 'Юбилейная медаль «Тридцать лет Победы в Великой Отечественной войне 1941—1945 гг.»',
    id: 68,
  },
  {
    src: '/medals/medalOfWin40.png',
    name: 'Юбилейная медаль «Сорок лет Победы в Великой Отечественной войне 1941—1945 гг.»',
    id: 69,
  },
  {
    src: '/medals/medalOfWinJapan.png',
    name: 'Медаль «За победу над Японией»',
    id: 70,
  },
  {
    src: '/medals/medalOfTakingBudapest.png',
    name: 'Медаль «За взятие Будапешта»',
    id: 71,
  },
  {
    src: '/medals/medalOfTakingKoenigsberg.png',
    name: 'Медаль «За взятие Кёнигсберга»',
    id: 72,
  },
  {
    src: '/medals/medalOfTakingVeinna.png',
    name: 'Медаль «За взятие Вены»',
    id: 73,
  },
  {
    src: '/medals/medalOfTakingBerlin.png',
    name: 'Медаль «За взятие Берлина»',
    id: 74,
  },
  {
    src: '/medals/medalOfLiberationBelgrad.png',
    name: 'Медаль «За освобождение Белграда»',
    id: 75,
  },
  {
    src: '/medals/medalOfLiberationWarsaw.png',
    name: 'Медаль «За освобождение Варшавы»',
    id: 76,
  },
  {
    src: '/medals/medalOfLiberationPrague.png',
    name: 'Медаль «За освобождение Праги»',
    id: 77,
  },
  {
    src: '/medals/medalOfVeryNiceWorkWhileWar.png',
    name: 'Медаль «За доблестный труд в Великой Отечественной войне 1941—1945 гг.»',
    id: 78,
  },
  {
    src: '/medals/medalOfVeteranOfWork.png',
    name: 'Медаль «Ветеран труда»',
    id: 79,
  },
  {
    src: '/medals/medalOfVeteranOfArmedForces.png',
    name: 'Медаль «Ветеран Вооружённых Сил СССР»',
    id: 80,
  },
  {
    src: '/medals/medalOfStrengthening.png',
    name: 'Медаль «За укрепление боевого содружества»',
    id: 81,
  },
  {
    src: '/medals/medalOfRecoveryFactories.png',
    name: 'Медаль «За восстановление предприятий чёрной металлургии Юга»',
    id: 82,
  },
  {
    src: '/medals/medalOfRecoveryCoal.png',
    name: 'Медаль «За восстановление угольных шахт Донбасса»',
    id: 83,
  },
  {
    src: '/medals/medalOfDevelopmentLands.png',
    name: 'Медаль «За освоение целинных земель»',
    id: 84,
  },
  {
    src: '/medals/medalOfBuildingHighway.png',
    name: 'Медаль «За строительство Байкало-Амурской магистрали»',
    id: 85,
  },
  {
    src: '/medals/medalOfTransformationLand.png',
    name: 'Медаль «За преобразование Нечерноземья РСФСР»',
    id: 86,
  },
  {
    src: '/medals/medalOfDevelopmentOil.png',
    name: 'Медаль «За освоение недр и развитие нефтегазового комплекса Западной Сибири»',
    id: 87,
  },
  {
    src: '/medals/medalOfMilitary20years.png',
    name: 'Юбилейная медаль «XX лет Рабоче-Крестьянской Красной Армии»',
    id: 88,
  },
  {
    src: '/medals/medalOfMilitary30years.png',
    name: 'Юбилейная медаль «30 лет Советской Армии и Флота»',
    id: 89,
  },
  {
    src: '/medals/medalOfMilitary40years.png',
    name: 'Юбилейная медаль «40 лет Вооружённых Сил СССР»',
    id: 90,
  },
  {
    src: '/medals/medalOfMilitary50years.png',
    name: 'Юбилейная медаль «50 лет Вооружённых Сил СССР»',
    id: 91,
  },
  {
    src: '/medals/medalOfMilitary60years.png',
    name: 'Юбилейная медаль «60 лет Вооружённых Сил СССР»',
    id: 92,
  },
  {
    src: '/medals/medalOfMilitary70years.png',
    name: 'Юбилейная медаль «70 лет Вооружённых Сил СССР»',
    id: 93,
  },
  {
    src: '/medals/medalOfPolice50years.png',
    name: 'Юбилейная медаль «50 лет советской милиции»',
    id: 94,
  },
  {
    src: '/medals/medalOfMoscow800years.png',
    name: 'Медаль «В память 800-летия Москвы»',
    id: 95,
  },
  {
    src: '/medals/medalOfLeningrad250years.png',
    name: 'Медаль «В память 250-летия Ленинграда»',
    id: 96,
  },
  {
    src: '/medals/medalOfKiev1500years.png',
    name: 'Медаль «В память 1500-летия Киева»',
    id: 97,
  },
  {
    src: '/medals/medalOfBestMilitary1.png',
    name: 'Медаль «За безупречную службу» 1 степени',
    id: 98,
  },
  {
    src: '/medals/medalOfBestMilitary2.png',
    name: 'Медаль «За безупречную службу» 2 степени',
    id: 99,
  },
  {
    src: '/medals/medalOfBestMilitary3.png',
    name: 'Медаль «За безупречную службу» 3 степени',
    id: 100,
  },
  {
    src: '/medals/other.png',
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

import It from "../Assets/Images/it.png";
import Logistic from "../Assets/Images/logistik.png";
import Plumbing from "../Assets/Images/plumbing.png";
import Distribution from "../Assets/Images/distribition.png";
import Accouting from "../Assets/Images/accouting.png";

const servicesProducts = {
  it: {
    id: 1,
    poster: It,
    text: "XXI asrda hayotimizni IT texnalogiyalarsiz tasavvur qilib bo'lmaydi. Shuni hisobga olgan holda, bizning bu bo'lim alohida platforma bo'lib, asosiy vazifasi raqamlashtirishdan iborat. Android platformasi va Web platformasida ish olib borilmoqda. Yaqin kunlarda ushbu dasturlarimiz foydalanishga topshiriladi",
  },

  logistic: {
    id: 2,
    poster: Logistic,
    text: "2019 yilda Onur kompaniyasini qoshida Onur logistika bo'limi ochildi. Bu bo'lim Turkiyadan O'zbekistonga turli hildagi tovarlarni Fura(Tir) orqali olib keladi va yetkazib beradi. Ushbu jarayonda yuzaga keladigan dokument ishlarini ham bitkazib beradi.",
  },

  plumbing: {
    id: 3,
    poster: Plumbing,
    text: "Turkiya davlatining en ko'zga ko'ringan kompaniyalari bilan hamkorlikda ishlaydigan bu bo'lim, 15 yildan ko'p vaqt mobaynida xalqimizning santexnikaga oid ehtiyojlarini qondirib kelmoqda.",
  },

  accounting: {
    id: 4,
    poster: Accouting,
    text: "Kichik va o'rta turdagi tadbirkorlarning asosiy muammolari bo'lgan xujjar ishlarini osonlashtirish maqsadida ushbu bo'limni ochishni maqsad qildik. Tez orada bu bo'limimiz ham o'z faoliyatini boshlaydi",
  },

  distribution: {
    id: 5,
    poster: Distribution,
    text: "Butun Toshken shahri va qisman Toshkent viloyatini O'z ichiga olgan ushbu bo'limda, 5000 dan ortiq qurilish soxasiga oid maxsulotlarni yetkazib beish bilan shug'ullanadi. Kelajakda bu rejalarni butun O'zbekiston bo'ylab amalga oshrish.",
  },
};

export default servicesProducts;

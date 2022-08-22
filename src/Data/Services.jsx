import It from "../Assets/Images/ServicePage/It.webp";
import Logistic from "../Assets/Images/ServicePage/Logistic.webp";
import Plumbing from "../Assets/Images/ServicePage/Plumbing.webp";
import Distribution from "../Assets/Images/ServicePage/Distribution.webp";
import Accouting from "../Assets/Images/ServicePage/Accouting.webp";

const servicesProducts = {
  en: {
    it: {
      id: 1,
      poster: It,
      title: "It",
      text: "Our life in the 21st century is unimaginable without IT technologies. With this in mind, this section of ours is a separate platform, the main task of which is digitization. Work is underway on the Android platform and the Web platform. These programs will be put into use in the near future",
    },

    logistic: {
      id: 2,
      poster: Logistic,
      title: "Logistic",
      text: "In 2019, the Onur logistics department was opened under the Onur company. This department brings and delivers various goods from Turkey to Uzbekistan through Fura (Tir). It also completes the document work that occurs in this process.",
    },

    plumbing: {
      id: 3,
      poster: Plumbing,
      title: "Plumbing",
      text: "This department, working in cooperation with the most prominent companies of the Turkish state, has been meeting the plumbing needs of our people for more than 15 years.",
    },

    accounting: {
      id: 4,
      poster: Accouting,
      title: "Buga",
      text: "We aimed to open this department in order to facilitate the work of khujjar, which is the main problem of small and medium-sized entrepreneurs. Soon this department will also start its activities",
    },

    distribution: {
      id: 5,
      poster: Distribution,
      title: "Distribution",
      text: "In this section, which includes the entire city of Tashkent and partially the Tashkent region, more than 5000 products related to the construction industry are delivered. In the future, these plans will be implemented throughout Uzbekistan.",
    },
  },
  ru: {
    it: {
      id: 1,
      poster: It,
      title: "Информационные технологии",
      text: "Наша жизнь в 21 веке немыслима без IT-технологий. В связи с этим наш отдел аутсорсинга представляет собой отдельную платформу, основной задачей которой является цифровизация. Ведутся работы на платформе Android и веб-платформе. Эти программы пригодятся в ближайшем будущем",
    },

    logistic: {
      id: 2,
      poster: Logistic,
      title: "Логистика",
      text: "В 2019 году был открыт отдел логистики Онур при компании Онур. Этот отдел привозит и доставляет различные товары из Турции в Узбекистан через Фуру (Тир). Он также завершает работу с документами, которая происходит в этом процессе..",
    },

    plumbing: {
      id: 3,
      poster: Plumbing,
      title: "Сантехника",
      text: "Этот отдел, работая в сотрудничестве с самыми известными компаниями турецкого государства, уже более 15 лет удовлетворяет потребности наших людей в сантехнике.",
    },

    accounting: {
      id: 4,
      poster: Accouting,
      title: "Бухгалтерский учет",
      text: "Мы стремились открыть этот отдел, чтобы облегчить работу худжар, которая является основной проблемой мелких и средних предпринимателей. Вскоре этот отдел также начнет свою деятельность",
    },

    distribution: {
      id: 5,
      poster: Distribution,
      title: "Распределение",
      text: "Ташкент и частично Ташкентскую область, поставляется более 5000 товаров, связанных со строительной отраслью. В дальнейшем эти планы будут реализовываться по всему Узбекистану.",
    },
  },
  uz: {
    it: {
      id: 1,
      poster: It,
      title: "Axborot texnologiyalari",
      text: "XXI asrda hayotimizni IT texnalogiyalarsiz tasavvur qilib bo'lmaydi. Shuni hisobga olgan holda, bizning bu bo'lim alohida platforma bo'lib, asosiy vazifasi raqamlashtirishdan iborat. Android platformasi va Web platformasida ish olib borilmoqda. Yaqin kunlarda ushbu dasturlarimiz foydalanishga topshiriladi",
    },

    logistic: {
      id: 2,
      poster: Logistic,
      title: "Logistika",
      text: "2019 yilda Onur kompaniyasini qoshida Onur logistika bo'limi ochildi. Bu bo'lim Turkiyadan O'zbekistonga turli hildagi tovarlarni Fura(Tir) orqali olib keladi va yetkazib beradi. Ushbu jarayonda yuzaga keladigan dokument ishlarini ham bitkazib beradi.",
    },

    plumbing: {
      id: 3,
      poster: Plumbing,
      title: "Santexnika",
      text: "Turkiya davlatining en ko'zga ko'ringan kompaniyalari bilan hamkorlikda ishlaydigan bu bo'lim, 15 yildan ko'p vaqt mobaynida xalqimizning santexnikaga oid ehtiyojlarini qondirib kelmoqda.",
    },

    accounting: {
      id: 4,
      poster: Accouting,
      title: "Buxgalteriya hisobi",
      text: "Kichik va o'rta turdagi tadbirkorlarning asosiy muammolari bo'lgan xujjar ishlarini osonlashtirish maqsadida ushbu bo'limni ochishni maqsad qildik. Tez orada bu bo'limimiz ham o'z faoliyatini boshlaydi",
    },

    distribution: {
      id: 5,
      poster: Distribution,
      title: "Tarqatish",
      text: "Butun Toshken shahri va qisman Toshkent viloyatini O'z ichiga olgan ushbu bo'limda, 5000 dan ortiq qurilish soxasiga oid maxsulotlarni yetkazib beish bilan shug'ullanadi. Kelajakda bu rejalarni butun O'zbekiston bo'ylab amalga oshrish.",
    },
  },
};

export default servicesProducts;

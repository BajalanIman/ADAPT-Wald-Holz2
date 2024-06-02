import image1 from "./../../assets/page1.jpg";

const TeamData = [
  {
    id: 1,
    position: "Projektkoordination",
    people: [
      {
        id: 1,
        name: "Dr. Ferréol Berendt",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde",
        phone: "+49 3334 657-414",
        email: "Ferreol.Berendt[at]hnee.de",
        image:
          "data:image/jpeg;base64,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",
        page: "https://www.hnee.de/de/Fachbereiche/Wald-und-Umwelt/Lehrbeauftragte-/-wissenschaftliche-Mitarbeiter/-innen/Ferrol-Berendt-E10529.htm",
      },
    ],
  },
  {
    id: 2,
    position: "Nachwuchsgruppe",
    people: [
      {
        id: 1,
        name: "Tobias Bender",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde",
        phone: "+49 (3334) 657-276",
        email: "Tobias.Bender@hnee.de",
        image: "",
        page: "",
      },
      {
        id: 2,
        name: "Ramazan Bülbül",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde",
        phone: "",
        email: "Ramazan.Buelbuel@hnee.de",
        image:
          "https://i1.rgstatic.net/ii/profile.image/1107926097895429-1641161574924_Q512/Ramazan-Buelbuel-2.jpg",
        page: "https://www.linkedin.com/in/ramazan-b%C3%BClb%C3%BCl-03798394/?originalSubdomain=de",
      },
      {
        id: 3,
        name: "Maximilian Jakob",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde",
        phone: "",
        email: "Maximilian.Jakob@hnee.de",
        page: "",
      },
      {
        id: 4,
        name: "Dr. Julia Kaplick",
        address: "Landesbetrieb Forst Brandenburg",
        phone: "03334 - 2759 473",
        email: "Julia.Kaplick[at]LFB.brandenburg.de",
        image: "",
        page: "",
      },
      {
        id: 5,
        name: "Tina Krüger",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde",
        phone: "",
        email: "Tina.Krueger@hnee.de",
        page: "",
      },
      {
        id: 6,
        name: "Alexa Michel",
        address: "nstitut für Waldökosysteme, Thünen-Institut.",
        phone: "+49 3334 3820 367",
        email: "alexa.michel@thuenen.de",
        page: "",
      },
      {
        id: 7,
        name: "Stephan Playfair",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde",
        phone: "",
        email: "tephan.Playfair@zalf.de",
        image:
          "https://media.licdn.com/dms/image/C4E03AQGta0xCi3Locg/profile-displayphoto-shrink_800_800/0/1655975122488?e=1723075200&v=beta&t=0duSYIT2bp6t6T8ObyM7rfUKnTFZA1eLf7prYhsQwcU",
        page: "https://www.linkedin.com/in/spwr/?trk=public_profile_browsemap&originalSubdomain=de",
      },
      {
        id: 8,
        name: "Dr. Friedrich Reppe",
        address: "Max-Planck-Institut für Kolloid- und Grenzflächenforschung",
        phone: "+49 331 567-9249",
        email: "Friedrich.Reppe@mpikg.mpg.de",
        page: "https://www.mpikg.mpg.de/person/51211",
      },
    ],
  },
  {
    id: 3,
    position: "Teilprojektleitung",
    people: [
      {
        id: 1,
        name: "Prof. Dr. Jan-Peter Mund",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde (HNEE)",
        phone: "+49-(0)3334-657 189",
        email: "Jan-Peter.Mund(at)hnee.de",
        image:
          "https://www.hnee.de/_obj/22A2456B-912F-4546-9735-08E5C8C247E3/inline/size/198x/Prof-Jan-Peter-Mund.jpg",
        page: "https://www.hnee.de/en/Faculties/Faculty-of-Forest-and-Environment/Professors/Jan-Peter-Mund/Prof.-Dr.-Jan-Peter-Mund-E5173.htm",
      },
      {
        id: 2,
        name: "Prof. Dr. Alexander Pfriem",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde (HNEE)",
        phone: "+ 49 (0)3334 657 - 377",
        email: "Alexander.Pfriem(at)hnee.de",
        image:
          "https://www.hnee.de/_obj/37811339-C8FB-4003-8D8B-621D90AC8020/inline/size/290x/20210622_Portraitfoto_Alexander_Pfriem02.jpg",
        page: "https://www.hnee.de/de/Fachbereiche/Holzingenieurwesen/Team/Professorinnen/Prof.-Dr.-Ing.-Alexander-Pfriem/Prof.-Dr.-Ing.-Alexander-Pfriem-E7615.htm",
      },
      {
        id: 3,
        name: "Prof. Dr. Ulrich Schwarz",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde (HNEE)",
        phone: "+ 49 (0)3334 657 - 374",
        email: "Ulrich.Schwarz(at)hnee.de",
        image:
          "https://www.hnee.de/_obj/7CAFE77A-68E3-423E-AB1A-AE17CAAF79DB/inline/size/290x/20170601-HNEE-MitarbeiterInnen-Portraits_Ulrich_Wessollek-5892.jpg",

        page: "https://www.hnee.de/de/Fachbereiche/Holzingenieurwesen/Team/Professorinnen/Prof.-Dr.-Ing.-Ulrich-Schwarz/Prof.-Dr.-Ing.-Ulrich-Schwarz-E7614.htm",
      },
      {
        id: 4,
        name: "Prof. Dr. Peter Spathelf",
        address: "Hochschule für nachhaltige Entwicklung Eberswalde (HNEE)",
        phone: "+49 -(0)3334 657 171",
        email: "Peter.Spathelf(at)hnee.de",
        image:
          "https://www.hnee.de/_obj/4C89CCFF-B40E-487F-A6E9-8FC49C225E57/inline/size/140x/Spathelf_portrait.jpg",

        page: "https://www.hnee.de/de/Fachbereiche/Wald-und-Umwelt/Professorinnen-und-Professoren/Peter-Spathelf/Prof.-Dr.-Peter-Spathelf-E3235.htm",
      },
      {
        id: 5,
        name: "Prof. Dr.-Ing. Karola Dierichs",
        address:
          "Max-Planck-Institut für Kolloid- und Grenzflächenforschung (MPIKG)",
        phone: " +49 331 567-9452",
        email: "karola.dierichs(at)mpikg.mpg.de",
        image:
          "https://www.mpikg.mpg.de/employee_images/110913-1683209416?t=eyJ3aWR0aCI6MjQ2LCJoZWlnaHQiOjMxNiwiZml0IjoiY3JvcCIsImZpbGVfZXh0ZW5zaW9uIjoid2VicCJ9--9dbe8aa4926f0ad1e2a60651069f65b0944e122c",
        page: "https://www.mpikg.mpg.de/person/110913",
      },
      {
        id: 6,
        name: "Dr. Tanja Sanders",
        address: "Thünen-Institut",
        phone: "+49 3334 3820 339",
        email: "tanja.sanders(at)thuenen.de",
        image:
          "https://www.thuenen.de/media/_processed_/2/9/csm_140DSC_1362-Bearbeitet_matena-moments_Portrait___2__f01572e02d.jpg",
        page: "https://www.thuenen.de/de/fachinstitute/waldoekosysteme/personal/wissenschaftliches-personal/dr-tanja-sanders",
      },
      {
        id: 7,
        name: "Dr. Ulrike Hagemann",
        address: "Leiterin Landeskompetenzzentrum Eberswalde (LFE)",
        phone: "+49 3334 2759400",
        email: "ulrike.hagemann(at)lfb.brandenburg.de",
        image:
          "https://forst.brandenburg.de/sixcms/media.php/9/Portr_HAGEMANN%20U%20IMG_1995b%20Foto%20A%20Neumann.JPG",
        page: "https://forst.brandenburg.de/lfb/de/ueber-uns/landeskompetenzzentrum-lfe/leiterin-lfe/#",
      },
      {
        id: 8,
        name: "Prof. Dr. Jens Schröder",
        address: "Landeskompetenzzentrum Forst Eberswalde (LFE)",
        phone: "03334-657-359",
        email: "jens.schroeder(at)hnee.de",
        image:
          "https://www.hnee.de/_obj/FA88301C-D012-4355-A094-0930CA685C9B/inline/size/200x/20230728_175217.jpg",
        page: "https://www.hnee.de/de/Fachbereiche/Wald-und-Umwelt/Professorinnen-und-Professoren/Dr.-Jens-Schrder/Prof.-Dr.-Jens-Schrder-E10035.htm",
      },
      {
        id: 9,
        name: "Prof. Dr. Gunnar Lischeid",
        address: "Leibniz-Zentrum für Agrarlandschaftsforschung (ZALF)",
        phone: "+49 (0)33432 82-250",
        email: "lischeid(at)zalf.de",
        image:
          "https://www.zalf.de/de/ueber_uns/mitarbeiter/PublishingImages/940.jpg",
        page: "https://www.zalf.de/de/ueber_uns/mitarbeiter/Seiten/lischeid_g.aspx",
      },
    ],
  },
];
export default TeamData;

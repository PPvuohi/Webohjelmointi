class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this._kuva = null;
    this._paino = null;
    this._laji = null;
    this._saavutukset = [];
  }
  get kuva() {
    return this._kuva;
  }
  set kuva(value) {
    this._kuva = value;
  }

  get paino() {
    return this._paino;
  }
  set paino(value) {
    this._paino = value;
  }

  get laji() {
    return this._laji;
  }
  set laji(value) {
    this._laji = value;
  }

  get saavutukset() {
    return this._saavutukset;
  }
  set saavutukset(value) {
    this._saavutukset = value;
  }
}

let urheilija1 = new Urheilija("Hessu", "Hopo", "Hessu", 1932);
urheilija1.kuva =
  "https://www.artnet.com/WebServices/images/ll19843lldmBzJFg3okR3CfDrCWvaHBOcPneG/walt-disney-studios-sport-goofy-in-soccermania-scrooge-mcduck-production-cel-(walt-disney,-1987).jpg";
urheilija1.paino = 60;
urheilija1.laji = "jalkapallo";
urheilija1.saavutukset.concat({
  vuosi: 1987,
  tapahtuma: "Soccermania",
  joukkue: "McDuck Greenbacks",
  tulos: "voitto 10-0",
});

class Henkilo {
  /**
   * @param {any} etunimet
   * @param {any} sukunimi
   * @param {any} kutsumanimi
   * @param {any} syntymavuosi
   */
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  /**
   * @param {string} etunimet
   * @param {string} sukunimi
   * @param {string} kutsumanimi
   * @param {number} syntymavuosi
   * @param {string} kuva
   * @param {number} paino
   * @param {string} laji
   * @param {{ vuosi: number; tapahtuma: string; joukkue: string; tulos: string; }[]} saavutukset
   */
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, kuva, paino, laji, saavutukset) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this._kuva = kuva;
    this._paino = paino;
    this._laji = laji;
    this._saavutukset = saavutukset;
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

let urheilija1 = new Urheilija("Hessu", "Hopo", "Hessu", 1932, 
  "https://www.artnet.com/WebServices/images/ll19843lldmBzJFg3okR3CfDrCWvaHBOcPneG/walt-disney-studios-sport-goofy-in-soccermania-scrooge-mcduck-production-cel-(walt-disney,-1987).jpg",
  60,
  "jalkapallo",
  [{
  vuosi: 1987,
  tapahtuma: "Soccermania",
  joukkue: "McDuck Greenbacks",
  tulos: "voitto 10-0",
  }]);
console.log(urheilija1);
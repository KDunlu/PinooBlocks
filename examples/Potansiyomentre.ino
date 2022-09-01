int pot=A0; // Potansiyometremiz için A0 pinini belirliyoruz ve "pot" değişkenine atıyoruz.

void setup() {
pinMode(pot,INPUT); // Pinimizi giriş pini olarak belirliyoruz.
Serial.begin(9600); // Seri haberleşmeyi başlat.

}

void loop() { // Döngüyü başlatıyoruz.

  Serial.println(analogRead(pot)); // Değerimizi seri porta yazdırıyoruz.
  }

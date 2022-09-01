int gaz=A0; // Sensörümüz için A0 pinini belirliyoruz ve "gaz" değişkenine atıyoruz.

void setup() {
pinMode(gaz,INPUT); // Değişkenimizi giriş pini olarak belirliyoruz.
Serial.begin(9600); // Seri haberleşme başlatıldı.
}

void loop() { // Döngüyü başlatıyoruz.
Serial.println(analogRead(gaz)); // Değeri seri porta yazdırıyoruz.
delay(500); //Bekleme süresi.
}

int pir=2; // Sensörümüz için digital 2 pinini belirliyoruz ve "pir" değişkenine atıyoruz.

void setup() {

pinMode(pir,INPUT); // Değişkenimizi giriş pini olarak belirliyoruz.
Serial.begin(9600); // Seri haberleşmeyi başlatıyoruz.
}

void loop() { //Döngüyü başlatıyoruz.
Serial.println(digitalRead(pir)); // Değeri seri portta yazdırıyoruz.
delay(500); //Bekleme süresi.
}

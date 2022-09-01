int egim=2; // Sensörümüz için digital 2 pinini belirliyoruz ve "egim" değişkenine atıyoruz.
void setup() {
 pinMode(egim,INPUT); // Değişkenimizi giriş pini olarak belirliyoruz.
 Serial.begin(9600); // Seri haberleşmeyi başlatıyoruz.
}

void loop() { // Döngü başlatıyoruz.

Serial.println(digitalRead(egim)); // Değerimizi seri portta yazdırıyoruz.
delay(500); // Bekleme süresi.
}

int buton=2; //Butonumuz için digital 2 pinini belirliyoruz ve "buton" değişkenine atıyoruz.
void setup() {
 pinMode(buton,INPUT); // Değişkenimizi giriş olarak ayarılıyoruz.
 Serial.begin(9600); // Seri haberleşmeyi başlatıyoruz.
}

void loop() { // Döngüyü başlatıyoruz.

Serial.println(digitalRead(buton)); // Değerimizi seri porta yazdırıyoruz.
delay(500); // Bekleme süresi.
}

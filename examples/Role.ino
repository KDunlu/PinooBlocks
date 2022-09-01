int role=2; // Röle için digital 2 pinini belirliyoruz ve "role" değişkenine atıyoruz.

void setup() {
 pinMode(role,OUTPUT); // Rolemizi çıkış olarak belirliyoruz.
}

void loop() { // Döngüyü başlatıyoruz.

digitalWrite(role,HIGH); // Röleye enerji veriyoruz.
delay(3000); // Bekleme süresi.
digitalWrite(role,LOW); // Röleye enerji vermeyi bırakıyoruz.
delay(3000); // Bekleme süresi.
}

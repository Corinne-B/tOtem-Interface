/*
  DigitalReadSerial
This sketch allow you to read different digital pins of the controller
Joystick arcade
Arcade Button
Rectangle Button
 */

// digital pins have a pushbutton attached to it:
int pushButton2 = 2;
int pushButton3 = 3;
int pushButton4 = 4;
int pushButton5 = 5;
int pushButton6 = 6;
int pushbutton7 = 7;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  // make the pushbuttons' pin an input:
  pinMode(pushbutton7, INPUT);
  pinMode(pushButton2, INPUT);
  pinMode(pushButton3, INPUT);
  pinMode(pushButton4, INPUT);
  pinMode(pushButton5, INPUT);
  pinMode(pushButton6, INPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input pin:

  // print out the state of buttons:
  Serial.println("_____________________________________________________________________");
  Serial.println("pushbutton7 :");
  Serial.println(digitalRead(pushbutton7));
  Serial.println("pushButton2 :");
  Serial.println(digitalRead(pushButton2));
  Serial.println("pushButton3 :");
  Serial.println(digitalRead(pushButton3));
  Serial.println("pushButton4 :");
  Serial.println(digitalRead(pushButton4));
  Serial.println("pushButton5 :");
  Serial.println(digitalRead(pushButton5));
  Serial.println("pushButton6 :");
  Serial.println(digitalRead(pushButton6));
  delay(1000);        // delay in between reads for stability
}




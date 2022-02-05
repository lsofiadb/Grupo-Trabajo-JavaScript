
public class Hero {
    private String name;
    private int age;
    private String power;

    public Hero(String name, int age, String power) {
        this.name = name;
        this.age = age;
        this.power = power;
    }

    public void greet(){
        System.out.println("Hola, soy " + this.name + " y tengo " + age + " años y soy capaz de " + power);
    }
}

Hero spiderman = new Hero("Spiderman", 30, "Veneno");
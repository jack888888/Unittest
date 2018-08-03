public class A {

    private final static B b = new B("b");
    private C c = new C();

    public String getB() {
        return b.getValue();
    }

    public String getC(){
        return c.getValue();
    }

    private void method1(String str) {
        c.setValue("c");
    }

    private String method2(String str) {
        c.setValue(str);
        return c.getValue();
    }

    private String method3() {
        D d = new D();
        return d.getValue();
    }

}

import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class ATest {
    private A a = new A();

    @Test
    public void test() throws Exception {
        Assert.assertEquals("b", a.getB());

        Method method = A.class.getDeclaredMethod("method2", String.class);
        method.setAccessible(true);
        String result = (String)method.invoke(a, "c");
        Assert.assertEquals("c", result);

//        result = (String)Whitebox.invokeMethod(a, "method2", "c1");
//        Assert.assertEquals("c1", result);

    }

    @Test
    public void test0() throws Exception {
        C c =new C();
        c.setValue("c");
        Field field = A.class.getDeclaredField("c");
        field.setAccessible(true);
        field.set(a, c);
        Assert.assertEquals("c", a.getC());
    }

    @Test
    public void test1() throws Exception {
        B b = new B("b1");
        Field field = A.class.getDeclaredField("b");
        field.setAccessible(true);
        Field modifiersField = Field.class.getDeclaredField("modifiers");
        modifiersField.setAccessible(true);
        modifiersField.setInt(field, field.getModifiers() & ~Modifier.FINAL);
        field.set(null, b);
        Assert.assertEquals("b1", a.getB());
    }

}

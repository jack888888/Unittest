import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;

mock:
A a = Mockito.spy(new A());
A a = Mockito.mock(A.class);
A a = PowerMockito.spy(new A());

Mockito.when(A.method()).thenReturn();
Mockito.when(proxy.getAll(Matchers.anyObject())).thenReturn(result);

Mockito.doReturn(crieria).when(dataTransformer).fromStringToObject(params, PinOperationParams.class);
Mockito.doReturn(domainObjectInUI).when(dataTransformer).fromObjectToString(Matchers.anyObject(), Mockito.eq(clz));

PowerMockito.when(managerConfig.getConfigValue("ENABLE")).thenReturn("true");
PowerMockito.doReturn(result).when(proxy, "getAll", Matchers.anyObject());
PowerMockito.whenNew(DAOImpl.class).withNoArguments().thenReturn(dao);
PowerMockito.whenNew(RESTServiceProxy.class).withArguments(Mockito.eq(A.class), Mockito.eq("")).thenReturn(proxy);

void method:
doNothing().when(historyLogFacade).saveHistoryLog(Matchers.any(), Matchers.any());


mock static:
@PrepareForTest({A.class})
@SuppressStaticInitializationFor({"com.A"})
mockStatic(A.class)

private:
Field f = A.class.getDeclaredField("a");
f.setAccessible(true);
f.set(instanceA, a);
Method method = A.class.getDeclaredMethod("methodA", String.class, List.class);
method.setAccessible(true);
method.invoke(instanceA, "str", list);

Whitebox.invokeMethod(class/instance, method, parameter)
Whitebox.setInteralState(object, filed, value);

MemberModifier.stub(MemberMatcher.method(LoggingUtil.class, "info", String.class, String.class)).toReturn(null);
MemberModifier.field(A.class, "a").set(a, a1);

import mockit.Mocked;
@Mocked(stubOutClassInitialization = true)
A a;
        new Expectations() {{
            Whitebox.invokeMethod(dao, "getEntityManager");
            result = a;
            a.methodA((String) any);
            result = updateResult;
        }};

Final Static Field:
field.setAccessible(true);
Field modifiersField = Field.class.getDeclaredField("modifiers");
modifiersField.setAccessible(true);
modifiersField.setInt(field, field.getModifiers() & ~Modifier.FINAL);
field.set(null, newValue);
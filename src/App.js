export default function App() {
  const [user, setUser] = useState(false);

  const checkLogin = async () => {
    let temp = await AsyncStorage.getItem('access_token');
    if (temp) {
      setUser(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []); // Ensure that this useEffect runs only once on component mount

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'TodoList' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
// ClassComponentTest.test.jsx
import ClassComponentTest from "../Components/ClassComponentTest";

// describe('ClassComponentTest', () => {
    test('getUser method returns "User List"', () => {
        // Create an instance of the component
        const instance = new ClassComponentTest();

        // Call the getUser method
        const result = instance.getUser();
        
        // Verify the method's output
        expect(result).toBe('User List');
    });
// });
// 
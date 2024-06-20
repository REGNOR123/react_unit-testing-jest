import { render } from '@testing-library/react';
import SnapShotTesting from '../Components/SnapShotTesting';


test('Click Event Testing',()=>{
    const container = render(<SnapShotTesting />);
    expect(container).toMatchSnapshot();
});
 
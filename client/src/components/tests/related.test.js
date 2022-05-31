import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
import { debug } from "console";
import renderer from "react-test-renderer";
import  App from "../App.jsx";
import RelatedProducts from '../Related/RelatedProducts.jsx'
//import { shallow} from 'enzyme';
//import dummyData from '../Related/dummyData.js';
import API from '../../../API/index.js';
import axios from 'axios';

test('should render button', async ()=>{
    render(<App/>);
    await waitFor(() => screen.getAllByRole('button'))
    expect(screen.getByRole('button', {name: /add/i })).toBeInTheDocument();//test add button on the outfit list part

})

test('should render heading of Outfit', async ()=>{
    render(<App/>);

    await waitFor(() => screen.getAllByRole('heading'))
    expect( screen.getByRole('heading', {name: 'Outfit List' })).toBeInTheDocument()

})


//  test('#data is not defined', async () => {
//       const wrapper = shallow(<RelatedProducts id={dummyData.id}/>);
//       expect(wrapper.find('#carousel')).not.toBeUndefined();
//     });

// jest.mock('axios');
// test('axios', async ()=>{
// axios.get.mockResolvedValue( {
//     data: [
//         {id:40344, name:'Camo Onesie'}
//     ]
// });
//  API.getProducts( (data, err) => {
//      expect(data[0].id).toEqual(40344)
//  });
// })




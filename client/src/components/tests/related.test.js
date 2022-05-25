import { render, screen, cleanup, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
import { debug } from "console";
import renderer from "react-test-renderer";
import App from "../App.jsx";
// afterEach(cleanup);

test('should render button', async ()=>{
    render(<App/>);
    await waitFor(() => screen.getAllByRole('button'))
    expect(screen.getByRole('button', {name: /add/i })).toBeInTheDocument();//test add button on the outfit list part

})

test('should render heading of Outfit', async ()=>{
    render(<App/>);

    await waitFor(() => screen.getAllByRole('heading'))
    expect( screen.getByRole('heading', {name: /Outfit/i }))

})



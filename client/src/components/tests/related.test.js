import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
import { debug } from "console";
import renderer from "react-test-renderer";
import App from "../App.jsx";
import RelatedProducts from '../Related/RelatedProducts.jsx'

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


describe.only("Fetchy", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    it("shows Loading", async () => {
        render(<App />);



        jest.advanceTimersByTime(3000);

        screen.debug();
        expect(screen.getByText("Forest")).toBeInTheDocument();
    });
});


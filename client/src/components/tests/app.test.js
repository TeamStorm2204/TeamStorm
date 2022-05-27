import { render, screen, cleanup, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
import { debug } from "console";
import renderer from "react-test-renderer";
import App from "../App.jsx";

// afterEach(cleanup);

test('should render app', async ()=>{
    render(<App/>);

    await waitFor(() => screen.getAllByRole('heading'))

    expect(screen.getByRole('heading', {name: 'Products' })).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Related Product' })).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Camo Onesie' })).toBeInTheDocument();
})
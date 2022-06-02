import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
import { debug } from "console";
import renderer from "react-test-renderer";
import App from "../App.jsx";
import Reviews from '../Reviews/Reviews.jsx'

// afterEach(cleanup);

test('should render create review button', async () => {
  render(<App />);
  await waitFor(() => screen.getAllByRole('button'))
  expect(screen.getByRole('button', { name: 'Write a review' })).toBeInTheDocument();//test add button on the outfit list part

})

test('should render Reviews heading', async () => {
  render(<App />);

  await waitFor(() => screen.getAllByRole('heading'))
  expect(screen.getByRole('heading', { name: 'Reviews' }))

})

test()
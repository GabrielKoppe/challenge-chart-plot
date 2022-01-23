import { render, screen } from '@testing-library/react';
import App from '../App';
import DataProvider from '../Context/DataContext'

function AppTest() {
    return (
        <DataProvider>
            <App/>
        </DataProvider>
    )
}


describe('App Component', () => {
    test(`it must start the header with the value "Gabriel's Challenge"`, () => {
        render(<AppTest/>)
        
        const selectHeder = screen.getByText(`Gabriel's Challenge`)
        expect(selectHeder).toBeInTheDocument
    })
    test(`must contain a "GENERATE CHART" button`, () => {
        render(<AppTest/>)

        const selectButton = screen.getByRole('button', { name: /GENERATE CHART/i})
        expect(selectButton).toBeInTheDocument
    })
})

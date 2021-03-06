import React, { useEffect, useState } from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layouts'
import portfolios from '../assets/data/portfolios'
import Menu from '../Components/Menu'
import Button from '../Components/Button'

interface Props { }

// const allButtons = ['All', 'Animation', ...portfolios.map(item => item.category)]

const PortfoliosPage: React.FC<Props> = () => {
    const [menuItem, setMenuItem] = useState(portfolios);
    const [button, setButton] = useState(['All']);


    const filter = (button: string) => {

        if (button === 'All') {
            setMenuItem(portfolios)
            return
        }
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItem(filteredData)
    }

    useEffect(() => {

        const demoData = new Set(portfolios.map(item => item.category))
        let item = ['All']
        demoData.forEach(function (value) {
            item.push(value)
        });
        setButton(item)
    }, [])

    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
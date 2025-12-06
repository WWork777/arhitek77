'use client'
import './DisignPrice.scss'
import { useState, useEffect } from 'react'

function DisignPrice() {
    const [isMobile, setIsMobile] = useState(false)
    const [openAll, setOpenAll] = useState(false)
    const [openStates, setOpenStates] = useState([false, false, false])

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const toggleItem = (index) => {
        const updated = [...openStates]
        updated[index] = !updated[index]
        setOpenStates(updated)
    }

    const serviceData = [
        {
            title: 'Эскизный проект',
            price: '1500 руб./м2',
            items: [
                'Обмерный план помещений',
                'План монтажа/демонтажа перегородок',
                'План расстановки мебели и оборудования',
                '3D визуализация',
            ],
        },
        {
            title: 'Дизайн-проект отделки',
            price: '2500 руб./м2',
            items: [
                'Обмерный план помещений',
                'План монтажа/демонтажа перегородок',
                'План расстановки мебели и оборудования',
                'План размещения и схема открывания дверей',
                'Спецификация заполнения дверных проемов',
                'План привязки сантехнических приборов. Спецификация оборудования',
                'План расстановки розеток и выключателей. Спецификация',
                'План размещения осветительных приборов. Спецификация осветительных приборов',
                'План плинтусов и напольных покрытий с раскладкой элементов. Ведомость финишных покрытий',
                'План потолков с отметками. Ведомость финишных покрытий',
                'План финишной отделки стен. Ведомость финишных покрытий',
                'Развертки стен',
                '3D визуализация',
            ],
        },
        {
            title: 'Дизайн-проект отделки + авторский надзор',
            price: '3500 руб./м2',
            items: [
                'Обмерный план помещений',
                'План монтажа/демонтажа перегородок',
                'План расстановки мебели и оборудования',
                'План размещения и схема открывания дверей',
                'Спецификация заполнения дверных проемов',
                'План привязки сантехнических приборов. Спецификация оборудования',
                'План расстановки розеток и выключателей. Спецификация',
                'План размещения осветительных приборов. Спецификация осветительных приборов',
                'План плинтусов и напольных покрытий с раскладкой элементов. Ведомость финишных покрытий',
                'План потолков с отметками. Ведомость финишных покрытий',
                'План финишной отделки стен. Ведомость финишных покрытий',
                'Развертки стен',
                '3D визуализация',
                'Комплектация объекта финишными отделочными материалами и мебелью',
                'Авторский надзор',
            ],
        },
    ]

    return (
        <div className='disign-price-container'>
            <h1>СТОИМОСТЬ УСЛУГ <b>ДИЗАЙНА ИНТЕРЬЕРОВ</b></h1>
            <div className='disign-price-grid'>
                {serviceData.map((service, index) => {
                    const isOpen = isMobile ? openStates[index] : openAll

                    return (
                        <div
                            key={index}
                            className={`disign-price-item ${isOpen ? 'expanded' : ''}`}
                        >
                            <h2>{service.title}</h2>
                            <b>{service.price}</b>
                            {service.items.map((item, i) => (
                                <p key={i}>{i + 1}. {item}</p>
                            ))}
                          {isMobile && index !== 0 && (
                            <button onClick={() => toggleItem(index)}>
                                {isOpen ? 'СВЕРНУТЬ' : 'ОТКРЫТЬ ПОЛНОСТЬЮ'}
                            </button>
                            )}
                        </div>
                    )
                })}
            </div>
            {!isMobile && (
                <button onClick={() => setOpenAll(!openAll)}>
                    {openAll ? 'СВЕРНУТЬ' : 'ОТКРЫТЬ ПОЛНОСТЬЮ'}
                </button>
            )}
        </div>
    )
}

export default DisignPrice

import { Modal, Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Rating = (props) => {
    // Modal always showing
    const [rating, setRating] = useState(null)
    const [selected, setSelected] = useState("options")
    const [buttons, setButtons] = useState(null)
    const showState = true
    const onSubmit = (e) => {
        setRating()
    }

    const onClick = (e) => {
        e.preventDefault()
        console.log('e', e.target.value)
        setRating(e.target.value)
        setSelected("options selected")
    }

    let buttonOptions = [1, 2, 3, 4, 5]

    useEffect(() => {
        console.log('useeffect rating', rating)
        setButtons(buttonOptions.map((button, index) => {
            console.log('button', button)
            if (button == rating) {
                return <Button key={index} type="input" onClick={onClick} className={selected} value={button}>{button}</Button>
            } else {
                return <Button key={index} type="input" onClick={onClick} className="options" value={button}>{button}</Button>
            }
        }))
    }, [rating])

    // buttons = buttonOptions.map((button, index) => {
    //     if (button == rating) {
    //         return <Button key={index} type="input" onClick={onClick} className={selected}>{button}</Button>
    //     } else {
    //         return <Button key={index} type="input" onClick={onClick} className="options">{button}</Button>
    //     }
    // })

    return (
        <>
            <Modal show={showState}>
                <Modal.Body className="modal-body">
                    <div className="circle">
                        <svg role="img" focusable="false" width="17" height="16" xmlns="http://www.w3.org/2000/svg"><title>Star Icon</title><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
                    </div>
                    <Modal.Title>How did we do?</Modal.Title>
                    <Form.Group>
                        <Form.Label>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Form.Label>
                        { buttons }
                        <Button type="submit" onClick={onSubmit}></Button>
                    </Form.Group>
                </Modal.Body>
            </Modal>
        </>
    )
}   

export default Rating
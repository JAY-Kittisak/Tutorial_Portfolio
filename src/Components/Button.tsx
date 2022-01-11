import React from 'react'

interface Props {
    filter: (button: string) => void
    button: Array<string>
}

const Button: React.FC<Props> = ({ filter, button }) => {
    return (
        <div>
            {
                button.map((but, i) => {
                    return (
                        <button key={i} onClick={() => filter(but)}>
                            {but}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Button
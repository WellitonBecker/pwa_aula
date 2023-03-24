import React from "react"

interface Props {
    children: React.ReactNode
}

export default function LayoutPublic({ children }: Props){
    return (
        <>
            <h1>Tenant Public</h1>
            {children}
        </>
    )
}
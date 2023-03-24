import React from "react"

interface Props {
    children: React.ReactNode
}

export default function LayoutTenant({ children }: Props){
    return (
        <>
            <h1>Tenant Layout</h1>
            {children}
        </>
    )
}
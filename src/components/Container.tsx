import { ReactNode } from "react"
import { MenuLeft } from "@/components/menus/MenuLeft"
import { MenuRigth } from "@/components/menus/MenuRigth"
import { Nav } from "@/components/Nav"

export function Container({classApply, children}: {classApply: string, children: ReactNode}) {
    return (
        <section className="main-container">
            <MenuLeft classApply={classApply} />
            <div className="cont-nav width-100">
                <Nav />
                <div className="container-scroll">
                    {children}
                </div>
            </div>
            <MenuRigth />
        </section> 
    )
}
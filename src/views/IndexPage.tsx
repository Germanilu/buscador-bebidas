import { useAppStore } from "../stores/useAppStore"


const categories = useAppStore((state) => state.categories);


export default function IndexPage() {
  
  return (
    <>
        <h1>Inicio</h1>
    </>
  )
}

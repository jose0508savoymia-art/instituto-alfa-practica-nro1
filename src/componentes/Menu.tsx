export default function () {

function handlerclick (){

}
    return (
        <header>
            
            <nav>
                <div onClick={handlerclick}>KOPPE</div>

                <ul>
                    <li><a href="/">inicio</a></li>
                    <li><a href="/about">sobre nosotros</a></li>
                    <li><a href="/service">servicio</a></li>
                    <li><a href="/home">hogar</a></li>
                    <li><a href="/menu">menu</a></li>
                    <li><a href="/contact">contactanos</a></li>
                </ul>
          </nav>
        </header>

    )
}

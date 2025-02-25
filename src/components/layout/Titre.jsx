import shape8 from '../../assets/img/shape/shape8.svg';
export default function Titre({page, titre}){
    return (
        <>
            <div class="page-title-area">
                <div class="container">
                    <div class="page-title-content">
                        <ul>
                            <li><a href="index.html">Menu</a></li>
                            <li>{page}</li>
                        </ul>
                        <h2>{titre}</h2>
                    </div>
                </div>
                <div class="shape9"><img src={shape8} alt="image"/></div>
            </div>
        </>
    );
}
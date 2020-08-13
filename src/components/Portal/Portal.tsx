import React from 'react';
import testas from '../../img/testas.png';
import classes from './Portal.module.scss';

const Portal = () => {
    return (
        <div className={classes.Div}>
            <div className={classes.SubDiv}>
                <h3>PRIDĖTI DETALĘ</h3>
                
                <ul className={classes.ListStyle}>
                    <li >
                        <label htmlFor="select auto"> Pasirinkti automobilį
                            <select name="" id="">
                                <option value="">123</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="brand"> Markė
                            <select name="" id="">
                                <option value="">1</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="model">Modelis
                            <select name="" id="">
                                <option value="">2</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="build year">Pagaminimo metai
                            <select name="" id="">
                                <option value=""> 3</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="part name's search">Detalės pavadinimo paieška
                            <select name="" id="">
                                <option value="">4</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="category">Kategorija
                            <select name="" id="">
                                <option value="">5</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="subcategory">Subkategorija
                            <select name="" id="">
                                <option value="">6</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="part name">Detalės pavadinimas
                            <select name="" id="">
                                <option value="">7</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="condition">Būklė
                            <select name="" id="">
                                <option value="">8</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="pozition">Pozicija
                            <select name="" id="">
                                <option value="">9</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="engine">variklis
                            <select name="" id="">
                                <option value="">10</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="body type">Kėbulo tipas
                            <select name="" id="">
                                <option value="">11</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="steering wheel position">Vairo padėtis
                            <select name="" id="">
                                <option value="">12</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="driving wheel">Varomieji ratai
                            <select name="" id="">
                                <option value="">13</option>
                            </select>
                        </label>
                    </li>
                </ul>
                <p>Detalės kodas</p>
                <input ></input>
                <p>Pridėti papildomų kodų (click)</p>

            </div>

            <div className={classes.SubDiv}>
                <select name="" id="">
                    <option value="">PRIDĖTI AUTOMOBILĮ</option>
                </select>

                <ul className={classes.ListStyle}>
                    <li>
                        <label htmlFor="gear box">Pavarų dežė
                            <select name="" id="">
                                <option value="">1</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="color">Spalva
                            <select name="" id="">
                                <option value="">2</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="odometer">Rida
                            <input type="text"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="fuel">Kuras
                            <select name="" id="">
                                <option value="">4</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="engine capacity">
                            <select name="" id="">
                                <option value="">5</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="engine power">Variklio galia
                            <select name="" id="">
                                <option value="">6</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="lenght">Ilgis ,cm
                            <input type="text"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="width">Plotis, cm
                            <input type="text"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="height">Aukštis, cm
                            <input type="text"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="weight"> Svoris, kg
                            <input type="text"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="price">Kaina
                            <input type="text"/>
                        </label>
                    </li>
                </ul>
                <p>Aprašymas</p>
                <textarea name=""></textarea>
            </div>

            <div className={classes.SubDiv}>
                <p>Pridėti nuotraukas:</p>
                <div>
                    <img src={testas} alt="nuotrauka"/>
                </div>
                <button>PRIDETI</button>
            </div>

        </div>
    )
}

export default Portal;


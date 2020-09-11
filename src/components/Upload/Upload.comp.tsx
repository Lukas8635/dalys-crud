import React from 'react';

import classes from './Upload.module.scss';

import add from '../../img/add.svg';

interface Props {
  files: string[] | never[];
  handler: (file: FileList) => void;
}

const Upload: React.FC<Props> = ({ files, handler }) => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
      <label className={classes.addImg} htmlFor="filePicker" >Įkelti nuotraukas
      <img src={add} alt="+"/>
        <input 
         id="filePicker" style={{visibility:"hidden", width:'0rem'}} type={"file"}
          placeholder={'Ikelti nuotraukas'}
          
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handler(e.target.files as FileList)
          }
        />
        </label> 
        {/* <label for="imageUpload" class="btn btn-primary btn-block btn-outlined">Seleccionar imagenes</label>
<input type="file" id="imageUpload" accept="image/*" style="display: none"></input> */}
        {/* <label className={classes.label} htmlFor="file">Įkelti nuotraukas</label>  */}
      </div>
      <div className={classes.gallery}>
        {(files as string[]).map((img, i) => {
          console.log(img);
          return (
            <div className={classes.imagesContainer} key={i}>
              <img className={classes.image} src={img} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Upload;

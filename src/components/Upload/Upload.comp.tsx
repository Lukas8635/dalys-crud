import React from 'react';

import classes from './Upload.module.scss';

interface Props {
  files: string[] | never[];
  handler: (file: FileList) => void;
}

const Upload: React.FC<Props> = ({ files, handler }) => {
  return (
    <div className={classes.upload}>
      <div className={classes.header}>
        <label htmlFor=''>Įkelti nuotrauką</label>
        <input
          type='file'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handler(e.target.files as FileList)
          }
        />
      </div>
      <div>
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

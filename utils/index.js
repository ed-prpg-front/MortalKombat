export const getRandom = (number) => {
   return Math.ceil(Math.random() * number);
}

export const createElement = (tag, className) => {
   const $tag = document.createElement(tag);
   if (className) {
       $tag.classList.add(className);
   }
   return $tag;
}

export const time = () => {
   const date = new Date();
   return `${date.getHours()}:${date.getMinutes()}`;
}
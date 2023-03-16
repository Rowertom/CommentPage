export class Comment {
  constructor(dataComment, selectorTemplate, onClickToRemove = () => { }) {
    this._data = dataComment;
    this._selectorTemplate = selectorTemplate;
    this.onClickToRemove = onClickToRemove;
  }

  _getTemplate() {
    return document.querySelector(this._selectorTemplate).content.querySelector('.comment');
  }

  getElement() {
    this.element = this._getTemplate().cloneNode(true);
    const commentDelete = this.element.querySelector('.comment__delete');
    let commentTitle = this.element.querySelector('.comment__name');
    let commentText = this.element.querySelector('.comment__text');
    let commentLike = this.element.querySelector('.comment__like');
    let commentDate = this.element.querySelector('.comment__date');
    let commentTime = this.element.querySelector('.comment__time');

    commentDelete.addEventListener('click', (e) => {
      if (confirm('Are you sure?')) {
        this.onClickToRemove(this._data._id);
      }
    });

    if (this._data.favourite) {
      commentLike.classList.add('active');
    }

    commentLike.addEventListener('click', () => {
      commentLike.classList.toggle('active');
    });

    commentTitle.textContent = this._data.name ?? 'NO_NAME';
    commentText.textContent = this._data.text;
    const equalDate1 = new Date().toLocaleDateString();
    const equalDate2 = this._data.date;
    const equalDate3 = new Date(Date.now()-86400000).toLocaleDateString();
    if (equalDate1 === equalDate2){
      commentDate.textContent = 'Сегодня';
    } else if (equalDate3 === equalDate2){
      commentDate.textContent = 'Вчера';
    }
    else{
      commentDate.textContent = equalDate2;
    }
    commentTime.textContent = this._data.time;
    return this.element;
  }
}
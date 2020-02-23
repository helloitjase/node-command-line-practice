const prompt = require('prompt');

class TodoList {
  constructor() {
    this.list = [];
  }

  addToList() {
    prompt.get([{
      name:'item',
      message:'Add to TodoList'
    }], (err, result) => {
      this.list.push(result.item);
      console.log(this.list);
      this.addAnotherItem();
    })
  }

  startList() {
    this.addToList();
  }

  addAnotherItem() {
    prompt.get([{
      name: 'another',
      message: 'Add another item? y/n'
    }], (err, result) => {
      if (result.another !== 'y' && result.another !== 'n') {
        console.log('not a valid response, please pick y or n');
        this.addAnotherItem();
      } else if (result.another === 'y') {
        this.addToList();
      } else {
        return;
      }
    })
  }
}

function makeList () {
  let list = new TodoList();
  list.startList();
}

makeList();
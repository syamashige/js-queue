/**
 * Queue Class
 * -----------------------------
 * A Queue data structure implemented as an ES6 class
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 * You will be using an Object as an internal datastore.  Do not use an Array!
 *
 * There should be a constructor method with no arguments.
 *
 * Note that the _storage Object is OPTIONAL as there is a way to implement this exercise
 * without the _storage Object.
 *
 * @private {object} _storage              Default value should be an empty object. (Optional)
 * @private {number} _front                Default value should be set null.
 * @private {number} _back                 Default value should be set null.
 *
 */

 class Queue {
     constructor(storage, front, back) {
         this._storage = {};
         this._front = null;
         this._back = null;
     }
     

  /**
   * Queue Class Method => size()
   * -----------------------------
   * Returns the size of the queue.
   *
   * @name size
   * @return {Number}
   */

   size() {
    return this._front - this._back;
   }
   
  /**
   * Queue Class Method => enqueue(item)
   * -----------------------------
   * Puts an item in the queue.
   *
   * @name enqueue
   * @param item
   * @return {Number} returns the new size
   */

   enqueue (item) {
    this._storage[this._front] = item;
    this._front++;
   }

  /**
   * Queue Class Method => dequeue()
   * -----------------------------
   * Takes an item off the queue and returns it.
   *
   * @name dequeue
   * @return {Object}   Note that everything in javascript is an Object.
   */

    dequeue () {

        if (this._front - this._back === 0) {
            return null;
        } else {
        let deleteItem = this._storage[this._back];
        delete this._storage[this._back];
        this._back++;
        return deleteItem;
        }
    }
   /**
   * Queue Class Method => peek()
   * -----------------------------
   * Returns the value of the first element without dequeueing.
   *
   * @name peek
   * @return {Object}   Note that everything in javascript is an Object.
   */

    peek() {
        // return this._storage[this._back];

        // let size = this._front - this._back;

        if ((this._front - this._back) === 0) {
            return null;
        } else {
            return this._storage[this._back];
        }
    }
}
module.exports = Queue;
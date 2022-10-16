import React from "react";

function BookSection() {
  return (
    <section class="book" id="book">
      <h1 class="heading">
        {" "}
        booking <span>reserve a table</span>{" "}
      </h1>

      <form action="">
        <input type="text" placeholder="your name" class="box" />
        <input type="email" placeholder="your email" class="box" />
        <input type="number" placeholder="your number" class="box" />

        <textarea name="" placeholder="your message" class="box" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="send message" class="btn" />
      </form>
    </section>
  );
}

export default BookSection;

<template>
    <div class="container mb-5">
        <div class="offset-4">
           <form class="fav card p-5">
               <div class="offset-3 mb-5">
                   <h3 class="text-success">SIGN UP</h3>
               </div>
             <div class="form-group">
         <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" required>
         </div>
          <div class="form-group">
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
             <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          <div class="form-group">
         <input type="text" class="form-control" id="exampleInputPhone1" placeholder="Phone">
         </div>
          <div class="form-group">
         <input type="pass" class="form-control" id="exampleInputPassword1" placeholder="Password">
         </div>
         <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
             </div>
           <button type="submit" class="btn btn-success">Submit</button>
         </form>
         <router-link to="/Forms" class="text-decoration-none">Business Details</router-link>
        </div>
    </div>

</template>

<style>
.fav{
    width: 50%;
}
</style>
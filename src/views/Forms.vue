<template>
    <div class="container mb-5 ">
      <div class="row">
         <div class="col-8">
           <form class="fav card p-5">
               <div class="offset-3 mb-5">
                   <h3 class="text-success">BUSINESS DETAILS</h3>
               </div>
             <div class="form-group">
         <input type="picture" class="form-control" id="exampleInputName1" placeholder="Logo" required>
         </div>
          <div class="form-group">
            <input type="picture" class="form-control" id="exampleInputName1" placeholder="Business Name" required>
            </div>
          <div class="form-group">
         <input type="text" class="form-control" id="exampleInputPhone1" placeholder="Phone">
         </div>
          <div class="form-group">
         <input type="Address" class="form-control" id="exampleInputPassword1" placeholder="Address">
         </div>
          <div class="form-group">
         <!-- <input type="pass" class="form-control" id="exampleInputPassword1" placeholder="State"> -->
           <label> Choose your state</label><br>
         <select>
           <option value="Kano">Kano</option>
           <option value="Lagos">Lagos</option>
            <option value="Rivers">Rivers</option>
            <option value="Imo">Imo</option>
           </select>
         </div>
          <div class="form-group">
           <label>Choose your Country</label><br>
            <select>
           <option value="Nigeria">Nigeria</option>
           <option value="Ghana">Ghana</option>
            <option value="Niger">Niger</option>
            <option value="Dubai">Dubai</option>
           </select>
         </div>
          <div class="form-group">
            <label>No of staff:</label>
         <input type="number" class="form-control" id="exampleInputPassword1" max="50" min="0">
         </div>
         <div class="form-group">
            <label>No of working days:</label>
         <input type="text" class="form-control" id="exampleInputPassword1" placeholder="No of woirking days">
         </div>
         <div class="form-group">
           <label>Select Working days:</label><br>
            <form action="/action_page.php">
             <input type="checkbox"  value="Sunday"> Sunday<br>
              <input type="checkbox"  value="Monday"> Monday<br>
              <input type="checkbox"  value="Tuesday"> Tuesday<br>
              <input type="checkbox"  value="Wednesday"> Wednesday<br>
              <input type="checkbox"  value="Thursday"> Thursday<br>
              <input type="checkbox"  value="Friday"> Friday<br>
              <input type="checkbox" value="Saturday" >Saturday<br><br>
           </form>
         </div>
         <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
       <label class="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
        <button type="submit" class="btn btn-success">Submit</button>
    </form>
         </div>
         <div class="col-sm-4 p-5 mt-5">
           <img src="../assets/form.svg" class="form">
         </div>
      </div>
    </div>
</template>

<style scoped>
   .form{
     width: 100%
   }
</style>
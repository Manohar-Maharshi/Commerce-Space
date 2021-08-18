<span class="loader"></span>



<style>
.loader {
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: #29a38a;
  display: block;
  margin:auto;
  position: relative;
  color: #29a38a;
  transform: translateY(30px);
  box-sizing: border-box;
  animation: animloader 2s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: #29a38a;
  color: #29a38a;
  position: absolute;
  left: 30px;
  top: 0;
  animation: animloader 2s 0.2s ease infinite;
}
.loader::before {
  animation-delay: 0.4s;
  left: 60px;
}

@keyframes animloader {
  0% {
    top: 0;
    color: #94d1c4;
  }
  50% {
    top: 30px;
    color: #24927c;
  }
  100% {
    top: 0;
    color: #104137;
  }
}
    
</style>
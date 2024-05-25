package com.foodify.myimpl;

@FunctionalInterface
public interface TriFunction<T , U , R> { R apply(T t , U u); }
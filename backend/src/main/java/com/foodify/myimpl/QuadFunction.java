package com.foodify.myimpl;

@FunctionalInterface
public interface QuadFunction<T , U , V , R> { R apply(T t , U u , V v); }
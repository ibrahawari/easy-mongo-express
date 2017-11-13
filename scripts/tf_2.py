# === imports ===
from __future__ import print_function
import os
import tensorflow as tf
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# === code ===

a = tf.placeholder(tf.float32)
b = tf.placeholder(tf.float32)
adder_node = a + b
add_and_triple = adder_node * 4.

sess = tf.Session()

print(sess.run(adder_node, {a: 3, b: 4.5}))
print(sess.run(adder_node, {a: [1, 3], b: [2, 4]}))
print(sess.run(add_and_triple, {a: 3, b: 4.5}))


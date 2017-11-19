# === imports ===
from __future__ import print_function
import os
import tensorflow as tf
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# === code ===

W = tf.Variable([.3], dtype=tf.float32)
b = tf.Variable([-.3], dtype=tf.float32)
x = tf.placeholder(tf.float32)
linear_model = W*x + b

sess = tf.Session()

init = tf.global_variables_initializer()
sess.run(init)

y = tf.placeholder(tf.float32) # desired result
squared_deltas = tf.square(linear_model - y) # comparison between desired result and output
loss = tf.reduce_sum(squared_deltas) # its abstraction into a scalar value measuring loss
print(sess.run(loss, {x: [1, 2, 3, 4], y: [0, -1, -2, -3]}))

# === fixing the linear model to create no loss ===
fixW = tf.assign(W, [-1.])
fixb = tf.assign(b, [1.])
sess.run([fixW, fixb])
print(sess.run(loss, {x: [1, 2, 3, 4], y: [0, -1, -2, -3]}))

# We guessed the "perfect" values of W and b, but the whole point of machine learning is to find the correct model parameters automatically. We will show how to accomplish this in the next section.
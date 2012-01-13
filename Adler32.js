/**
* Adler32 fast checksum encoding, encodes a string to a numeric checksum.
* @class Kwik.Checksum.Adler32
* @singleton
* @created 10:49 PM 3/7/2008
* @modified 10:49 PM 3/7/2008
*/
Adler32 = 
{
	/** @ignore */
	__class: ["Kwik.Checksum.Adler32"],
	/** Modulo base @type Number */
	_base: 4096,
	/** Chunk size of chars to encode @type Number */
	_chunk: 1024,
	/** Encode the string to a Adler32 numeric value @type Number */
	encode: function(data)
	{
		var len = data.length;
		var sum = 1;
		var int1 = sum & 0xFFFF;
		var int2 = sum >> 16;
		var i=-1;
		while(len > 0)
		{
			var n = this._chunk>len? len: this._chunk;
			len -= n;
			while(n-- >= 0)
			{
				int1 = int1 + data.charCodeAt(i++) & 0xFF;
				int2 = int2 + int1;
			}
			int1 %= this._base;
			int2 %= this._base;
		}
		return int1 << 16 | int2;
	}
};
